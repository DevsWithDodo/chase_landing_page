
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

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
  createdAt: timestamp('created_at').defaultNow(),
});
