import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes for Vercel Postgres
  // API routes require server-side rendering
}

export default nextConfig
