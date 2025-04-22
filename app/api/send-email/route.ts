import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    { success: false, message: 'Email functionality is currently disabled' },
    { status: 503 }
  )
} 