import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hide and Chase - Real-World Chase Games Inspired by JetLag | Free Urban Adventure',
  description: 'Love JetLag? Play it in your city—free! Real-time chase games with city-optimized modes. Track opponents, explore urban environments, and outsmart your friends. Join closed beta now.',
  keywords: ['JetLag alternative', 'real-world chase game', 'city exploration game', 'urban adventure', 'location-based game', 'free chase game', 'hide and seek game', 'real-time tracking game', 'public transit game', 'IRL game'],
  authors: [{ name: 'Devs with the Dodo' }],
  creator: 'Devs with the Dodo',
  publisher: 'Devs with the Dodo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Hide and Chase',
    title: 'Hide and Chase - Real-World Chase Games Inspired by JetLag',
    description: 'Free urban adventure game inspired by shows like JetLag. Play real-time chase games in your city with friends. Multiple game modes, real-time tracking, city-optimized gameplay.',
    images: [
      {
        url: 'https://yourwebsite.com/gameplay-map.gif',
        width: 1200,
        height: 630,
        alt: 'Hide and Chase gameplay map showing real-time player tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hide and Chase - Real-World Chase Games Inspired by JetLag',
    description: 'Free urban adventure game inspired by JetLag. Play real-time chase games in your city.',
    images: ['https://yourwebsite.com/gameplay-map.gif'],
    creator: '@YourTwitterHandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
