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
      FunctionName: "latexToPdfFunction",
      InvocationType: "RequestResponse",
      Payload: lambdaPayload,
    });

    const response = await lambdaClient.send(command);

    if (!response.Payload) {
      throw new Error("No payload returned from Lambda");
    }

    // Parse the JSON response from Lambda
    const payloadString = Buffer.from(response.Payload).toString('utf-8');
    const payloadObj = JSON.parse(payloadString);

    if (payloadObj.statusCode !== 200) {
      throw new Error(`Lambda error: ${payloadObj.body}`);
    }

    // Decode the PDF from the base64 encoded string
    const pdfBuffer = Buffer.from(payloadObj.body, 'base64');

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
