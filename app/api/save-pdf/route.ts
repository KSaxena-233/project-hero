import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const { folderPath, fileName, pdfData } = await request.json();

    // Create directory if it doesn't exist
    try {
      await mkdir(folderPath, { recursive: true });
    } catch (error) {
      console.error('Error creating directory:', error);
    }

    // Convert base64 PDF data to Buffer
    const buffer = Buffer.from(pdfData, 'base64');
    
    // Save file
    const filePath = join(process.cwd(), folderPath, fileName);
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, filePath });
  } catch (error) {
    console.error('Error saving PDF:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save PDF' },
      { status: 500 }
    );
  }
} 