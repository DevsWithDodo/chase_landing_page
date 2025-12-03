import { sql } from '@vercel/postgres'
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

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT id, email, created_at
      FROM waitlist
      ORDER BY created_at DESC
    `

    return NextResponse.json({
      count: rows.length,
      signups: rows,
    })
  } catch (error) {
    console.error('Error fetching waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to fetch waitlist' },
      { status: 500 }
    )
  }
}
