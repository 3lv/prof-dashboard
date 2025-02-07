"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIFineTuningPage() {
  const [selectedLesson, setSelectedLesson] = useState("")
  const [finetuningStatus, setFinetuningStatus] = useState("")

  const handleFineTune = async () => {
    // This is a placeholder for the actual fine-tuning process
    setFinetuningStatus("Fine-tuning in progress...")
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setFinetuningStatus("Fine-tuning completed!")
  }

  return (
    <div className="w-full h-full bg-background p-8">
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">AI Fine-tuning</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Lesson for Fine-tuning</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Enter lesson name"
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
              className="mb-4"
            />
            <Button onClick={handleFineTune} disabled={!selectedLesson}>
              Start Fine-tuning
            </Button>
          </CardContent>
        </Card>
        {finetuningStatus && (
          <Card>
            <CardHeader>
              <CardTitle>Fine-tuning Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{finetuningStatus}</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
