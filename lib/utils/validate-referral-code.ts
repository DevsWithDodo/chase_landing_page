import { db } from '@/db';
import { waitlist } from '@/db/schema';
import { eq } from 'drizzle-orm';

/**
 * Validates if a referral code exists in the database
 * 
 * @param code - The invitation code to validate
 * @returns Promise<boolean> - true if code exists, false otherwise
 */
export async function validateReferralCode(code: string): Promise<boolean> {
  if (!code || typeof code !== 'string') {
    return false;
  }
  
  try {
    const normalizedCode = code.toUpperCase().trim();
    
    // Query database for the invitation code
    const result = await db
      .select({ invitationCode: waitlist.invitationCode })
      .from(waitlist)
      .where(eq(waitlist.invitationCode, normalizedCode))
      .limit(1);
    
    return result.length > 0;
  } catch (error) {
    console.error('Error validating referral code:', error);
    return false;
  }
}

/**
 * Checks if an invitation code already exists (for duplicate prevention)
 * 
 * @param code - The invitation code to check
 * @returns Promise<boolean> - true if code exists, false otherwise
 */
export async function codeExists(code: string): Promise<boolean> {
  return validateReferralCode(code);
}
