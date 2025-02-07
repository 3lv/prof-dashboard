import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SystemPrompt = `You are a LaTeX expert and a math teacher. Generate structured LaTeX code based on the user's request.
Your output should always be a complete and compilable LaTeX document for a real math test in Romanian.
You must escape all special characters correctly. You must obey to the template structure the user gives.
The LaTeX must include:
- A structured document with a title, instructions, and problems.
- Correct formatting for math equations and enumerated lists.
- Headers, footers, and consistent document styling.
Your response must never contain markdown formatting.
Strictly follow these rules.`;

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

  Foleseste STRICT următorul template LaTeX ca bază:
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
