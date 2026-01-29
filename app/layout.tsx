import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hide and Chase - Real-World Chase Games | Free Urban Adventure',
  description: 'Free to play IRL adventure game. Track opponents, explore urban environments, and outsmart your friends. Join closed beta now.',
  keywords: ['JetLag alternative', 'real-world chase game', 'real Scotland Yard game', 'Mister X game', 'Mr. X game', 'city exploration game', 'urban adventure', 'location-based game', 'free chase game', 'hide and seek game', 'real-time tracking game', 'public transit game', 'IRL game'],
  authors: [{ name: 'Devs with the Dodo' }],
  creator: 'Devs with the Dodo',
  publisher: 'Devs with the Dodo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hideandchase.com',
    siteName: 'Hide and Chase',
    title: 'Hide and Chase - Real-World Chase Games | Free Urban Adventure',
    description: 'Free to play IRL adventure game. Track opponents, explore urban environments, and outsmart your friends. Join closed beta now.',    images: [
      {
        url: 'https://hideandchase.com/_next/image?url=%2Fscreenshot-1.png&w=640&q=75',
        width: 640,
        height: 1422,
        alt: 'Hide and Chase gameplay map showing real-time player tracking',
      },
    ],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VX1KS0F9TG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VX1KS0F9TG');
            `,
          }}
        />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
