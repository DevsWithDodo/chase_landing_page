import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Screenshots from '@/components/Screenshots'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Hide and Chase',
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
    description: 'Real-world chase game inspired by shows like JetLag. Free urban adventure with multiple game modes, real-time tracking, and city-optimized gameplay.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Screenshots />
        <Waitlist />
        <Footer />
      </main>
    </>
  )
}
