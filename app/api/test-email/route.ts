import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Email testing is currently disabled' },
    { status: 503 }
  )
} 