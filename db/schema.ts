
import { boolean, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const waitlist = pgTable('waitlist', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  city: varchar('city', { length: 255 }),
  country: varchar('country', { length: 255 }),
  // Handling arrays in Drizzle with Postgres
  socials: text('socials').array(), 
  playPartners: text('play_partners').array(),
  duration: varchar('duration', { length: 50 }),
  platform: text('platform').array(), // iOS, Android, or both
  marketingConsent: boolean('marketing_consent').notNull().default(false),
  invitationCode: varchar('invitation_code', { length: 50 }).unique(),
  referredBy: varchar('referred_by', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow(),
});
