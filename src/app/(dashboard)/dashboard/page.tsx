"use client"

import { useEffect, useState } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { FileIcon, BookOpenIcon, BrainIcon } from "lucide-react"
import { AuthCheck } from "@/components/AuthCheck"
import { useAuth } from "@/contexts/AuthContext"

interface FileStats {
  totalFiles: number
  totalSize: number
  fileTypes: { [key: string]: number }
}

export default function DashboardPage() {
  const [stats, setStats] = useState<FileStats>({
    totalFiles: 0,
    totalSize: 0,
    fileTypes: {},
  })
  const { user } = useAuth()

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return

      const lessonsQuery = query(collection(db, "lessons"), where("userId", "==", user.uid))
      const querySnapshot = await getDocs(lessonsQuery)
      const newStats: FileStats = {
        totalFiles: 0,
        totalSize: 0,
        fileTypes: {},
      }

      querySnapshot.forEach((doc) => {
        const lesson = doc.data()
        newStats.totalFiles++
        newStats.totalSize += lesson.size || 0
        const fileType = lesson.name.split(".").pop() || "Unknown"
        newStats.fileTypes[fileType] = (newStats.fileTypes[fileType] || 0) + 1
      })

      setStats(newStats)
    }

    fetchStats()
  }, [user])

  const chartData = Object.entries(stats.fileTypes).map(([type, count]) => ({
    name: type,
    count: count,
  }))

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <AuthCheck>
      <div className="w-full h-full bg-background p-8">
        <main className="flex-1 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Files</CardTitle>
                <FileIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalFiles}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Size</CardTitle>
                <BookOpenIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatFileSize(stats.totalSize)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">File Types</CardTitle>
                <BrainIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Object.keys(stats.fileTypes).length}</div>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>File Types Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </AuthCheck>
  )
}
