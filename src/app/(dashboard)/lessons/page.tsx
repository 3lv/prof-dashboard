"use client"

import { useState, useEffect, useCallback } from "react"
import { db, storage } from "@/lib/firebase"
import { collection, addDoc, getDocs, deleteDoc, doc, query, where, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Upload } from 'lucide-react'
import { AuthCheck } from "@/components/AuthCheck"
import { useAuth } from "@/contexts/AuthContext"
import { useToast } from "@/hooks/use-toast"
import { Progress } from "@/components/ui/progress"
import { useDropzone } from 'react-dropzone'

interface Lesson {
  id: string
  name: string
  url: string
  createdAt: Date
  size: number
}

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      fetchLessons()
    }
  }, [user])

  const fetchLessons = async () => {
    if (!user) return

    const lessonsQuery = query(collection(db, "lessons"), where("userId", "==", user.uid))

    const querySnapshot = await getDocs(lessonsQuery)
    const lessonData: Lesson[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      lessonData.push({
        id: doc.id,
        name: data.name,
        url: data.url,
        createdAt: data.createdAt?.toDate() || new Date(),
        size: data.size || 0,
      })
    })

    lessonData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    setLessons(lessonData)
  }

  const handleUpload = async (file: File) => {
    if (!user) return

    try {
      setUploading(true)
      setUploadProgress(0)

      const storageRef = ref(storage, `users/${user.uid}/lessons/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setUploadProgress(progress)
        },
        (error) => {
          console.error("Error uploading file:", error)
          toast({
            title: "Error",
            description: "Failed to upload lesson",
            variant: "destructive",
          })
          setUploading(false)
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref)
          await addDoc(collection(db, "lessons"), {
            name: file.name,
            url: url,
            userId: user.uid,
            createdAt: serverTimestamp(),
            size: file.size,
          })

          toast({
            title: "Success",
            description: "Lesson uploaded successfully",
          })

          setUploading(false)
          setUploadProgress(0)
          fetchLessons()
        }
      )
    } catch (error) {
      console.error("Error uploading file:", error)
      toast({
        title: "Error",
        description: "Failed to upload lesson",
        variant: "destructive",
      })
      setUploading(false)
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleUpload(acceptedFiles[0])
    }
  }, [handleUpload, user]) // Added handleUpload to dependencies

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleDelete = async (lesson: Lesson) => {
    if (!user) return

    try {
      const storageRef = ref(storage, `users/${user.uid}/lessons/${lesson.name}`)
      await deleteObject(storageRef)
      await deleteDoc(doc(db, "lessons", lesson.id))

      toast({
        title: "Success",
        description: "Lesson deleted successfully",
      })

      fetchLessons()
    } catch (error) {
      console.error("Error deleting file:", error)
      toast({
        title: "Error",
        description: "Failed to delete lesson",
        variant: "destructive",
      })
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <AuthCheck>
      <div className="w-full h-full bg-background p-8">
        <main className="flex-1 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-6">Lessons</h1>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Upload New Lesson</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer ${
                  isDragActive ? 'border-primary' : 'border-gray-300'
                }`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
                <Upload className="mx-auto mt-4" size={24} />
              </div>
              {uploading && (
                <div className="mt-4">
                  <Progress value={uploadProgress} className="w-full" />
                  <p className="text-sm text-center mt-2">{Math.round(uploadProgress)}% uploaded</p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lesson List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Uploaded</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lessons.map((lesson) => (
                    <TableRow key={lesson.id}>
                      <TableCell>{lesson.name}</TableCell>
                      <TableCell>{formatFileSize(lesson.size)}</TableCell>
                      <TableCell>{formatDate(lesson.createdAt)}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" onClick={() => handleDelete(lesson)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {lessons.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        No lessons uploaded yet
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </AuthCheck>
  )
}
