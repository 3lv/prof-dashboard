"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const { signIn } = useAuth()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to TeacherAI Dashboard</h1>
        <p className="mb-6 text-lg">Please sign in to continue</p>
        <Button onClick={signIn} className="bg-blue-600 hover:bg-blue-700">
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}
