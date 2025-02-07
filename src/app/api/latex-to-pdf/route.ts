import { NextRequest, NextResponse } from 'next/server';
//import puppeteer from 'puppeteer';
//import katex from 'katex';
import latex from 'node-latex';

async function generatePdfFromLatex(latexString: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    // Create a PDF stream from the LaTeX input.
    const pdfStream = latex(latexString);
    const chunks: Buffer[] = [];

    pdfStream.on('data', (chunk) => {
      chunks.push(chunk);
    });

    pdfStream.on('end', () => {
      const pdfBuffer = Buffer.concat(chunks);
      resolve(pdfBuffer);
    });

    pdfStream.on('error', (err) => {
      console.error("LaTeX compilation error:", err);
      reject(err);
    });
  });
}

/*
// Helper to render LaTeX to HTML
function renderLatexToHTML(latexString: string) {
  const renderedMath = katex.renderToString(latexString, {
    throwOnError: false,
    displayMode: true,
  });
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
        <style>
          body { font-family: sans-serif; padding: 20px; }
        </style>
      </head>
      <body>
        ${renderedMath}
      </body>
    </html>
  `;
}

// Generate PDF from HTML using Puppeteer
async function generatePdfFromHtml(htmlContent: string) {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
  });
  await browser.close();
  return pdfBuffer;
}
*/

// Handle POST request to generate PDF
export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();
    if (!latex) {
      return NextResponse.json({ error: 'Missing LaTeX content' }, { status: 400 });
    }

    // Convert LaTeX to HTML and then to a PDF
    console.log("DEBUG, received LaTeX document: ", latex)
    const pdfBuffer = await generatePdfFromLatex(latex);

    // Return the PDF buffer to the client
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="generated.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
