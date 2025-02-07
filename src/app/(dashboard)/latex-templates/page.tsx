"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { db } from "@/lib/firebase"
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Plus, Trash, Eye, Save } from "lucide-react"

interface Template {
  id: string
  name: string
  content: string
}

export default function LatexTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [newTemplateName, setNewTemplateName] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isCompiling, setIsCompiling] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      fetchTemplates()
    }
  }, [user])

  const fetchTemplates = async () => {
    if (!user) return
    setIsLoading(true)
    try {
      // Use the subcollection under the user
      const templatesRef = collection(db, "users", user.uid, "latex_templates")
      const snapshot = await getDocs(templatesRef)
      const templateList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Template[]
      setTemplates(templateList)
    } catch (error) {
      console.error("Error fetching templates:", error)
      toast({
        title: "Error",
        description: "Failed to fetch templates",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const createNewTemplate = async () => {
    if (!user || !newTemplateName.trim()) return
    setIsLoading(true)
    try {
      // Use the subcollection path for adding a new document.
      const templatesRef = collection(db, "users", user.uid, "latex_templates")
      // Fetch a default template (make sure default_template.tex is in your public folder)
      const defaultTemplate = await fetch("/default_test_template.tex").then((res) =>
        res.text()
      )
      const newTemplate = {
        name: newTemplateName,
        content: defaultTemplate,
      }
      const docRef = await addDoc(templatesRef, newTemplate)
      setTemplates([...templates, { id: docRef.id, ...newTemplate }])
      setNewTemplateName("")
      toast({
        title: "Success",
        description: "New template created",
      })
    } catch (error) {
      console.error("Error creating template:", error)
      toast({
        title: "Error",
        description: "Failed to create template",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const deleteTemplate = async (templateId: string) => {
    if (!user) return
    setIsLoading(true)
    try {
      // Delete the document from the subcollection
      await deleteDoc(doc(db, "users", user.uid, "latex_templates", templateId))
      setTemplates(templates.filter((t) => t.id !== templateId))
      if (selectedTemplate?.id === templateId) {
        setSelectedTemplate(null)
      }
      toast({
        title: "Success",
        description: "Template deleted",
      })
    } catch (error) {
      console.error("Error deleting template:", error)
      toast({
        title: "Error",
        description: "Failed to delete template",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const updateTemplate = async () => {
    if (!user || !selectedTemplate) return
    setIsLoading(true)
    try {
      const templateRef = doc(
        db,
        "users",
        user.uid,
        "latex_templates",
        selectedTemplate.id
      )
      await updateDoc(templateRef, {
        name: selectedTemplate.name,
        content: selectedTemplate.content,
      })
      setTemplates(
        templates.map((t) =>
          t.id === selectedTemplate.id ? selectedTemplate : t
        )
      )
      toast({
        title: "Success",
        description: "Template updated",
      })
    } catch (error) {
      console.error("Error updating template:", error)
      toast({
        title: "Error",
        description: "Failed to update template",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const compileTemplate = async () => {
    if (!selectedTemplate) return
    setIsCompiling(true)
    try {
      // Send the LaTeX content to your API endpoint to compile it to PDF.
      const response = await fetch("/api/latex-to-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latex: selectedTemplate.content }),
      })

      if (!response.ok) {
        throw new Error("Failed to compile LaTeX")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      window.open(url, "_blank")
    } catch (error) {
      console.error("Error compiling LaTeX:", error)
      toast({
        title: "Error",
        description: "Failed to compile template",
        variant: "destructive",
      })
    } finally {
      setIsCompiling(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">LaTeX Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Input
                placeholder="New template name"
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
              />
              <Button onClick={createNewTemplate} disabled={isLoading}>
                <Plus className="mr-2 h-4 w-4" /> Add Template
              </Button>
            </div>
            <div className="mt-4 space-y-2">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="flex justify-between items-center"
                >
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    {template.name}
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteTemplate(template.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Edit Template</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedTemplate ? (
              <div className="space-y-4">
                <Input
                  value={selectedTemplate.name}
                  onChange={(e) =>
                    setSelectedTemplate({
                      ...selectedTemplate,
                      name: e.target.value,
                    })
                  }
                />
                <Textarea
                  rows={20}
                  value={selectedTemplate.content}
                  onChange={(e) =>
                    setSelectedTemplate({
                      ...selectedTemplate,
                      content: e.target.value,
                    })
                  }
                />
                <div className="flex justify-end space-x-2">
                  <Button onClick={updateTemplate} disabled={isLoading}>
                    <Save className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <Button onClick={compileTemplate} disabled={isCompiling}>
                    {isCompiling ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Eye className="mr-2 h-4 w-4" />
                    )}
                    Preview
                  </Button>
                </div>
              </div>
            ) : (
              <p>Select a template to edit</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
