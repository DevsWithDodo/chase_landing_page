# Vercel Postgres Waitlist Setup

This project uses Vercel Postgres to store waitlist signups.

## Setup Instructions

### 1. Create Vercel Postgres Database

1. Go to your Vercel project dashboard
2. Navigate to the **Storage** tab
3. Click **Create Database**
4. Select **Postgres**
5. Choose a database name (e.g., `chase-waitlist`)
6. Click **Create**

### 2. Initialize Database Schema

After creating the database, run the SQL schema to create the waitlist table:

1. In Vercel dashboard, go to your Postgres database
2. Click on the **Query** tab
3. Copy and paste the contents of `sql/setup.sql`
4. Click **Run Query**

Alternatively, you can use the Vercel CLI:

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Pull environment variables
vercel env pull .env.local

# Connect to your database and run the schema
# (You'll need to use a PostgreSQL client with the connection string from .env.local)
```

### 3. Environment Variables

Vercel automatically sets these environment variables when you create a Postgres database:

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

For local development, pull these variables:

```bash
vercel env pull .env.local
```

### 4. Deploy

```bash
git add .
git commit -m "Add Vercel Postgres waitlist"
git push
```

Vercel will automatically deploy your changes.

## Usage

### Submit Email to Waitlist

**POST** `/api/waitlist`

```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "message": "Successfully joined waitlist!"
}
```

### Get All Waitlist Signups

**GET** `/api/waitlist`

**Response:**
```json
{
  "count": 42,
  "signups": [
    {
      "id": 1,
      "email": "user@example.com",
      "created_at": "2025-12-03T10:30:00.000Z"
    }
  ]
}
```

## Viewing Signups

### Option 1: Using the API
Visit `https://your-domain.vercel.app/api/waitlist` to see all signups in JSON format.

### Option 2: Vercel Dashboard
1. Go to your project's Storage tab
2. Click on your Postgres database
3. Use the Query tab to run:
```sql
SELECT * FROM waitlist ORDER BY created_at DESC;
```

### Option 3: Export to CSV
In the Vercel Postgres Query tab:
```sql
COPY (SELECT * FROM waitlist ORDER BY created_at DESC) TO STDOUT WITH CSV HEADER;
```

## Database Schema

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Free Tier Limits

Vercel Postgres Free (Hobby) Tier includes:
- ✅ 256 MB storage
- ✅ 60 compute hours/month
- ✅ Unlimited requests
- ✅ Perfect for waitlists (can handle thousands of signups)

## Notes

- Emails are automatically converted to lowercase
- Duplicate emails are prevented (UNIQUE constraint)
- The API endpoint validates email format
- GET endpoint is unprotected - consider adding authentication if needed
