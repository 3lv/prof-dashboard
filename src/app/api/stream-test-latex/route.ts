import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SystemPrompt = `You are a LaTeX expert and an experienced math teacher. Your task is to generate a complete, compilable LaTeX document for a genuine math test in Romanian. You MUST adhere strictly to the user-provided template without altering its structure or layout.

Requirements:
- **Template Adherence:** Follow exactly the user-provided LaTeX template. Do not add, remove, or rearrange any sections.
- **Structured Content:** Ensure the document includes a title, clear instructions, and a series of problems (and complete solutions if the template specifies them).
- **High-Quality Math Content:** Create well-crafted, mathematically accurate problems that are appropriate for the specified grade level and difficulty. The math content must be logically sound and pedagogically effective.
- **Correct Formatting:** Use proper LaTeX syntax. This includes correctly formatted math equations, enumerated lists, headers, footers, and consistent styling.
- **Escaping Special Characters:** All LaTeX special characters must be correctly escaped.
- **Output Format:** The final output must be solely the LaTeX code. Do not include any markdown formatting or extra commentary.

Strictly follow these guidelines and produce a LaTeX document that meets the above requirements.`;

const ItemTypeTranslation: Record<string, string> = {
  Grid: "Grilă",
  "Complete Solution": "Rezolvare completă",
};

function createTestPrompt(config: {
  grade: string;
  difficulty: string;
  contents: string[];
  itemCounts: { Grid: number; "Complete Solution": number };
  additionalDescription: string;
  templateContent: string;
}): string {
  const { grade, difficulty, contents, itemCounts, additionalDescription, templateContent } = config;

  // Prepare a list of content labels.
  const contentList =
    contents.length > 0 ? contents.join(", ") : "toate continuturile relevante";

  // Prepare a description of the item counts.
  const itemDescriptions =
    Object.entries(itemCounts)
      .filter(([, count]) => count > 0)
      .map(
        ([itemType, count]) =>
          `${count} probleme de tip ${ItemTypeTranslation[itemType]}`
      )
      .join(", ") || "niciun item specificat";

  // Construct the prompt string with the template context.
  const prompt = `Generează un test de matematică complet în limba română pentru clasa ${grade} la nivelul de dificultate "${difficulty}". Testul trebuie să acopere următoarele conținuturi: ${contentList}. Subiectele vor fi compuse din: ${itemDescriptions}. ${
    additionalDescription ? "Informații suplimentare: " + additionalDescription : ""
  }

Foloseste STRICT următorul template LaTeX ca bază:
${templateContent}
  `;

  return prompt;
}

export async function POST(request: NextRequest) {
  const { config } = await request.json();
  const prompt = createTestPrompt(config);

  const stream = new ReadableStream({
    async start(controller) {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini", // or your chosen model
        messages: [
          { role: "system", content: SystemPrompt },
          { role: "user", content: prompt },
        ],
        stream: true,
      });

      for await (const chunk of completion) {
        const content = chunk.choices[0]?.delta?.content || "";
        controller.enqueue(content);
      }
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
