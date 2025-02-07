"use client";

import React, { useState } from "react";
// Import your ShadCN UI components (adjust these paths as needed)
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PromptPage = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [latex, setLatex] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setPdfUrl(null);
    setLatex("");

    try {
      // 1. Call your API endpoint to get the LaTeX (streaming response)
      const res = await fetch("/api/stream-test-latex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok || !res.body) {
        throw new Error("Failed to get LaTeX stream");
      }

      // Read the streaming response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let latexResult = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        latexResult += decoder.decode(value);
        // Optionally update the UI incrementally:
        setLatex(latexResult);
      }

      // 2. Call your PDF generation API endpoint with the obtained LaTeX
      const pdfRes = await fetch("/api/latex-to-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latex: latexResult }),
      });
      if (!pdfRes.ok) {
        throw new Error("Failed to generate PDF");
      }

      // Convert the PDF binary response into a Blob URL for display
      const pdfBlob = await pdfRes.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error(error);
      // Optionally: add error state to display an error message to the user
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Prompt to PDF Generator</h1>

      {/* Input area */}
      <div className="mb-4">
        <Textarea
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-40"
        />
      </div>

      {/* Submit button */}
      <div className="mb-4">
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Thinking..." : "Submit"}
        </Button>
      </div>

      {/* Display the generated LaTeX */}
      {latex && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Generated LaTeX</h2>
          <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">
            {latex}
          </pre>
        </div>
      )}

      {/* Display the generated PDF */}
      {pdfUrl && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Generated PDF</h2>
          <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
        </div>
      )}
    </div>
  );
};

export default PromptPage;
