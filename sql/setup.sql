-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  city VARCHAR(255),
  country VARCHAR(255),
  socials TEXT[],
  play_partners TEXT[],
  duration VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
