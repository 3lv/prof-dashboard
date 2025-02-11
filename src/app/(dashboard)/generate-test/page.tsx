"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Combobox } from "@/components/ui/combobox"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Import shadcn Collapsible components
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Import Firestore and authentication dependencies
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "@/contexts/AuthContext"

// Import icons
import { ChevronDown, ChevronUp } from "lucide-react"

// Options and mock curriculum data
const grades = ["V", "VI", "VII", "VIII"]
const difficultyLevels = ["Remediere", "Consolidare", "Standard", "Performanță", "Olimpiadă"]
const itemTypes = ["Grid", "Complete Solution"]

// Import your curriculum data from your data library
import curriculumData from "@/lib/data/curriculumData"

// Define a Template type (as stored in Firestore)
interface Template {
  id: string
  name: string
  content: string
}

export default function GenerateTestPage() {
  // Test configuration state
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  const [selectedContents, setSelectedContents] = useState<string[]>([])
  const [itemCounts, setItemCounts] = useState({ Grid: 0, "Complete Solution": 0 })
  const [additionalDescription, setAdditionalDescription] = useState("")

  // Advanced AI settings (experimental)
  const [advancedSettingsEnabled, setAdvancedSettingsEnabled] = useState(false)
  const [advancedSettings, setAdvancedSettings] = useState({
    temperature: 0.7,
    maxTokens: 1024,
    problemaBonus: false,
  })

  // Template selector state
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)

  // States for the API streaming and PDF generation
  const [loading, setLoading] = useState(false)
  const [latex, setLatex] = useState<string>("")
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  // Collapsible states
  const [isLatexOpen, setIsLatexOpen] = useState(false)

  // Get the authenticated user
  const { user } = useAuth()

  // Reset selected contents when grade or difficulty changes.
  useEffect(() => {
    setSelectedContents([])
  }, [])

  // Fetch the user's LaTeX templates from Firestore once the user is available.
  useEffect(() => {
    if (user) {
      const fetchTemplates = async () => {
        try {
          const templatesRef = collection(db, "users", user.uid, "latex_templates")
          const snapshot = await getDocs(templatesRef)
          const templateList = snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
          })) as Template[]
          setTemplates(templateList)
        } catch (error) {
          console.error("Error fetching templates:", error)
        }
      }
      fetchTemplates()
    }
  }, [user])

  const handleItemCountChange = (type: string, value: number) => {
    setItemCounts((prev) => ({ ...prev, [type]: value }))
  }

  // The function that gathers the parameters and calls the APIs
  const handleGenerateTest = async () => {
    setLoading(true)
    setLatex("")
    setPdfUrl(null)

    // Prepare your test configuration data
    const config = {
      grade: selectedGrade,
      difficulty: selectedDifficulty,
      contents: selectedContents,
      itemCounts,
      additionalDescription,
      templateId: selectedTemplate ? selectedTemplate.id : null,
      advancedSettings: advancedSettingsEnabled ? advancedSettings : null,
    }

    try {
      // 1. Call the API endpoint to generate LaTeX (streaming response)
      const res = await fetch("/api/stream-test-latex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      })

      if (!res.ok || !res.body) {
        throw new Error("Failed to get LaTeX stream")
      }

      // Read the streaming response from the API
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let latexResult = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        // Decode the streamed value and update the latex state
        latexResult += decoder.decode(value)
        setLatex(latexResult)
      }

      // 2. Once LaTeX generation is complete, call the PDF generation endpoint
      const pdfRes = await fetch("/api/latex-to-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latex: latexResult }),
      })
      if (!pdfRes.ok) {
        throw new Error("Failed to generate PDF")
      }

      // Convert the PDF binary response into a Blob URL for display
      const pdfBlob = await pdfRes.blob()
      const pdfUrl = URL.createObjectURL(pdfBlob)
      setPdfUrl(pdfUrl)
    } catch (error) {
      console.error("Error during test generation:", error)
      // Optionally: display an error message to the user here
    }

    setLoading(false)
  }

  // Generate content options for the Combobox based on the selected grade.
  const contentOptions = selectedGrade
    ? curriculumData[selectedGrade].units.map((unit) => ({
        unit: unit.title,
        items: unit.contents.map((content) => ({
          value: `${selectedGrade}-${unit.title}-${content.name}`,
          label: content.name,
        })),
      }))
    : []

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Generate Test</CardTitle>
          <CardDescription>Configure your test parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Grade and Difficulty selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select onValueChange={setSelectedGrade} value={selectedGrade}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select onValueChange={setSelectedDifficulty} value={selectedDifficulty}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficultyLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Content selection */}
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Combobox
              options={contentOptions}
              onValuesChange={setSelectedContents}
              values={selectedContents}
              placeholder="Select content"
              disabled={!selectedGrade || !selectedDifficulty}
              className="w-full"
            />
          </div>

          {/* Item Types and counts */}
          <div className="space-y-2">
            <Label>Item Types</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itemTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={itemCounts[type as keyof typeof itemCounts] > 0}
                    onCheckedChange={(checked) => handleItemCountChange(type, checked ? 1 : 0)}
                  />
                  <Label htmlFor={type}>{type}</Label>
                  <Input
                    type="number"
                    min="0"
                    value={itemCounts[type as keyof typeof itemCounts]}
                    onChange={(e) => handleItemCountChange(type, Number.parseInt(e.target.value) || 0)}
                    className="w-20"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Template selector */}
          <div className="space-y-2">
            <Label htmlFor="template">LaTeX Template</Label>
            <Select
              onValueChange={(val) => {
                const tpl = templates.find((t) => t.id === val)
                setSelectedTemplate(tpl || null)
              }}
              value={selectedTemplate ? selectedTemplate.id : ""}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                {templates.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Additional description */}
          <div className="space-y-2">
            <Label htmlFor="description">Additional Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Enter any additional details or requirements"
              value={additionalDescription}
              onChange={(e) => setAdditionalDescription(e.target.value)}
            />
          </div>


          {/* Advanced (Experimental) Settings */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="advanced-settings"
                checked={advancedSettingsEnabled}
                onCheckedChange={setAdvancedSettingsEnabled}
              />
              <Label htmlFor="advanced-settings">Enable Advanced (Experimental) Settings</Label>
            </div>

            {advancedSettingsEnabled && (
              <div className="border rounded-md p-4 space-y-2">
                <Alert variant="destructive">
                  <AlertDescription>These are experimental features. Use with caution.</AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature: {advancedSettings.temperature.toFixed(2)}</Label>
                    <Slider
                      id="temperature"
                      min={0}
                      max={1}
                      step={0.01}
                      value={[advancedSettings.temperature]}
                      onValueChange={(value) => setAdvancedSettings((prev) => ({ ...prev, temperature: value[0] }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxTokens">Max Tokens</Label>
                    <Input
                      id="maxTokens"
                      type="number"
                      value={advancedSettings.maxTokens}
                      onChange={(e) =>
                        setAdvancedSettings((prev) => ({
                          ...prev,
                          maxTokens: Number.parseInt(e.target.value) || 0,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="problema-bonus"
                      checked={advancedSettings.problemaBonus}
                      onCheckedChange={(checked: boolean) =>
                        setAdvancedSettings((prev) => ({ ...prev, problemaBonus: checked }))
                      }
                    />
                    <Label htmlFor="problema-bonus">Include Problema Bonus</Label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button onClick={handleGenerateTest} disabled={loading} className="w-full">
            {loading ? "Generating Test..." : "Generate Test"}
          </Button>
        </CardFooter>
      </Card>

      {(latex || pdfUrl) && (
        <Card className="w-full max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Generated Output</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Collapsible open={isLatexOpen} onOpenChange={setIsLatexOpen} className="w-full space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full flex justify-between items-center">
                  <span>{loading ? <span className="animate-pulse">Thinking...</span> : "Generated LaTeX"}</span>
                  {isLatexOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                <div className="w-full">
                  <pre className="bg-muted p-2 rounded whitespace-pre-wrap text-sm">{latex}</pre>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {pdfUrl && (
              <div className="w-full">
                <h2 className="text-xl font-semibold mb-2">Generated PDF</h2>
                <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
