import { db } from '@/db';
import { waitlist } from '@/db/schema';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { getBetaWelcomeEmailHTML, getBetaWelcomeEmailText } from '@/lib/email-templates/beta-welcome';
import { generateInvitationCode } from '@/lib/utils/generate-invitation-code';
import { validateReferralCode, codeExists } from '@/lib/utils/validate-referral-code';

export async function POST(request: Request) {
  try {
    const { name, email, city, country, socials, playPartners, duration, platform, marketingConsent, referralCode } = await request.json()

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

    // Validate referral code if provided
    if (referralCode) {
      const isValidReferral = await validateReferralCode(referralCode);
      if (!isValidReferral) {
        return NextResponse.json(
          { error: 'Invalid invitation code. Please check the code and try again.' },
          { status: 400 }
        )
      }
    }

    // Generate unique invitation code for this user
    let invitationCode = generateInvitationCode(name || email);
    let attempts = 0;
    const maxAttempts = 5;
    
    // Ensure the generated code is unique
    while (await codeExists(invitationCode) && attempts < maxAttempts) {
      invitationCode = generateInvitationCode(name || email);
      attempts++;
    }
    
    if (attempts >= maxAttempts) {
      return NextResponse.json(
        { error: 'Failed to generate unique invitation code. Please try again.' },
        { status: 500 }
      )
    }

    // Insert into database
    // await db.insert(waitlist).values({
    //   name: name || null,
    //   email: email.toLowerCase(),
    //   city: city || null,
    //   country: country || null,
    //   socials: socials || [],
    //   playPartners: playPartners || [],
    //   duration: duration || null,
    //   platform: platform || [],
    //   marketingConsent: marketingConsent || false,
    //   invitationCode: invitationCode,
    //   referredBy: referralCode ? referralCode.toUpperCase().trim() : null,
    // }).onConflictDoUpdate({
    //   target: waitlist.email,
    //   set: {
    //     name: name || null,
    //     city: city || null,
    //     country: country || null,
    //     socials: socials || [],
    //     playPartners: playPartners || [],
    //     duration: duration || null,
    //     platform: platform || [],
    //     marketingConsent: marketingConsent || false,
    //     referredBy: referralCode ? referralCode.toUpperCase().trim() : null,
    //   },
    // });

    // Send welcome email (non-blocking - don't fail registration if email fails)
    try {
      await sendEmail({
        to: email.toLowerCase(),
        subject: '🎮 Welcome to Chase Beta!',
        html: getBetaWelcomeEmailHTML({ name: name || '', email: email.toLowerCase(), invitationCode }),
        text: getBetaWelcomeEmailText({ name: name || '', email: email.toLowerCase(), invitationCode }),
      });
      console.log('Welcome email sent successfully to:', email.toLowerCase());
    } catch (emailError) {
      // Log error but don't fail the registration
      console.error('Failed to send welcome email (registration still successful):', emailError);
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist!', invitationCode },
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
