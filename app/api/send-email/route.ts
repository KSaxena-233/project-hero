import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting setup
let lastEmailSent = 0
const RATE_LIMIT_DELAY = 1000 // 1 second between emails

export async function POST(request: Request) {
  try {
    const { to, subject, text, html } = await request.json()
    
    // Check rate limit
    const now = Date.now()
    if (now - lastEmailSent < RATE_LIMIT_DELAY) {
      await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY))
    }
    
    console.log('API: Attempting to send email with Resend:', {
      to,
      subject
    })

    const data = await resend.emails.send({
      from: 'saxena.keshav.05@gmail.com',
      to: to,
      subject: subject,
      text: text,
      html: html,
      replyTo: 'saxena.keshav.05@gmail.com'
    })

    console.log('API: Resend response:', data)
    lastEmailSent = Date.now()

    if (data.error) {
      throw new Error(data.error.message)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('API: Failed to send email:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Unknown error occurred' },
      { status: 500 }
    )
  }
} 