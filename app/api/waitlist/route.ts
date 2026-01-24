import { db } from '@/db';
import { waitlist } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, city, country, socials, playPartners, duration } = await request.json()

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

    // Insert into database
    await db.insert(waitlist).values({
      name: name || null,
      email: email.toLowerCase(),
      city: city || null,
      country: country || null,
      socials: socials || [],
      playPartners: playPartners || [],
      duration: duration || null,
    }).onConflictDoUpdate({
      target: waitlist.email,
      set: {
        name: name || null,
        city: city || null,
        country: country || null,
        socials: socials || [],
        playPartners: playPartners || [],
        duration: duration || null,
      },
    });

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
