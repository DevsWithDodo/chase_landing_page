import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert email into database
    'use server';
    const sql = neon(`${process.env.DATABASE_URL}`);
    await sql`
      INSERT INTO waitlist (email)
      VALUES (${email.toLowerCase()})
      ON CONFLICT (email) DO NOTHING
    `

    return NextResponse.json(
      { message: 'Successfully joined waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}
