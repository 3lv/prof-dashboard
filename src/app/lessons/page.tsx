"use client"

import { useState, useEffect } from "react"
import { db, storage } from "@/lib/firebase"
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2 } from "lucide-react"

interface Lesson {
  id: string
  name: string
  url: string
}

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    fetchLessons()
  }, [])

  const fetchLessons = async () => {
    const querySnapshot = await getDocs(collection(db, "lessons"))
    const lessonData: Lesson[] = []
    querySnapshot.forEach((doc) => {
      lessonData.push({ id: doc.id, ...doc.data() } as Lesson)
    })
    setLessons(lessonData)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    const storageRef = ref(storage, `lessons/${file.name}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)

    await addDoc(collection(db, "lessons"), {
      name: file.name,
      url: url,
    })

    setFile(null)
    fetchLessons()
  }

  const handleDelete = async (lesson: Lesson) => {
    await deleteDoc(doc(db, "lessons", lesson.id))
    await deleteObject(ref(storage, lesson.url))
    fetchLessons()
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-6">Lessons</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload New Lesson</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input type="file" onChange={handleFileChange} className="flex-grow" />
              <Button onClick={handleUpload} disabled={!file}>
                Upload
              </Button>
            </div>
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
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lessons.map((lesson) => (
                  <TableRow key={lesson.id}>
                    <TableCell>{lesson.name}</TableCell>
                    <TableCell>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(lesson)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
