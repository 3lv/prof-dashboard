import { NextRequest, NextResponse } from 'next/server';
import { lambdaClient } from '@/lib/lambdaClient';
import { InvokeCommand } from '@aws-sdk/client-lambda';

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();
    if (!latex) {
      return NextResponse.json({ error: 'Missing LaTeX content' }, { status: 400 });
    }

    // Prepare the payload for your Lambda function.
    const lambdaPayload = JSON.stringify({ latex });

    const command = new InvokeCommand({
      FunctionName: "latexToPdfFunction", // Name of your Lambda function
      InvocationType: "RequestResponse",    // Synchronous invocation
      Payload: Buffer.from(lambdaPayload),
    });

    const response = await lambdaClient.send(command);

    if (!response.Payload) {
      throw new Error("No payload returned from Lambda");
    }

    // Convert the returned payload (a Uint8Array) into a Buffer.
    // Adjust this if your Lambda returns data in a different format (e.g., base64-encoded string).
    const pdfBuffer = Buffer.from(response.Payload);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="generated.pdf"',
      },
    });
  } catch (error) {
    console.error('Error invoking Lambda:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
