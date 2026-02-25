/**
 * Generates a unique invitation code based on the user's name
 * Format: USERNAME-XXXX (e.g., "DOMINIK-A1B2")
 * 
 * @param name - User's name
 * @returns Uppercase invitation code
 */
export function generateInvitationCode(name: string): string {
  // Take only the first word if name contains spaces
  const firstName = name.trim().split(/\s+/)[0];
  
  // Clean and prepare the name part
  const cleanName = firstName
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '') // Remove special characters
    .slice(0, 12); // Limit to 12 characters
  
  // Use a default if name is empty or invalid
  const namePart = cleanName || 'CHASE';
  
  // Generate 4-character random suffix
  const suffix = generateRandomSuffix();
  
  return `${namePart}-${suffix}`;
}

/**
 * Generates a random 4-character alphanumeric suffix
 * @returns 4-character uppercase string
 */
function generateRandomSuffix(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude similar-looking chars (I, O, 0, 1)
  let result = '';
  
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  
  return result;
}

/**
 * Validates if a code matches the expected format
 * @param code - Code to validate
 * @returns true if valid format
 */
export function isValidCodeFormat(code: string): boolean {
  // Format: NAME-XXXX where NAME is 1-12 alphanumeric chars and XXXX is 4 alphanumeric chars
  const codeRegex = /^[A-Z0-9]{1,12}-[A-Z0-9]{4}$/;
  return codeRegex.test(code.toUpperCase());
}
