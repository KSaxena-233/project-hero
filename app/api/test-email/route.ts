import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    console.log('Test API: Starting email test with API key:', process.env.RESEND_API_KEY?.slice(0, 8) + '...')
    
    const data = await resend.emails.send({
      from: 'Project HERO <onboarding@resend.dev>',
      to: 'saxena.keshav.05@gmail.com',
      subject: 'Project HERO - Test Email',
      html: `
        <h1>Project HERO Email Test</h1>
        <p>This is a test email to verify the email system is working.</p>
        <p>Time sent: ${new Date().toISOString()}</p>
        <p>If you receive this, the email system is functioning correctly.</p>
      `
    })

    console.log('Test API: Resend response:', data)

    if (!data || data.error) {
      throw new Error(data?.error?.message || 'Failed to send test email')
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Test API: Failed to send email:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    )
  }
} 