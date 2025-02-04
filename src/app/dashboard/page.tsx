"use client"

import { useEffect, useState } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarNav } from "@/components/Sidebar"
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

      const filesQuery = query(collection(db, "files"), where("userId", "==", user.uid))
      const querySnapshot = await getDocs(filesQuery)
      const newStats: FileStats = {
        totalFiles: 0,
        totalSize: 0,
        fileTypes: {},
      }

      querySnapshot.forEach((doc) => {
        const file = doc.data()
        newStats.totalFiles++
        newStats.totalSize += file.size
        newStats.fileTypes[file.type] = (newStats.fileTypes[file.type] || 0) + 1
      })

      setStats(newStats)
    }

    fetchStats()
  }, [user])

  const chartData = Object.entries(stats.fileTypes).map(([type, count]) => ({
    name: type,
    count: count,
  }))

  return (
    <AuthCheck>
      <div className="flex h-screen bg-background">
        <SidebarNav />
        <main className="flex-1 p-8 overflow-y-auto">
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
                <div className="text-2xl font-bold">{(stats.totalSize / 1024 / 1024).toFixed(2)} MB</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI Fine-tunings</CardTitle>
                <BrainIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.floor(Math.random() * 10)}</div>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>File Types Distribution</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
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
