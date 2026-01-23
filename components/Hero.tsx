'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative overflow-hidden gradient-adventure text-white pt-20 pb-20">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0  backdrop-blur-md border-b border-outline/20 z-50 bg-primary/60 m-2 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2 md:gap-3">
              {/* Logo in circular white box */}
              <div className='w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center'>
                <Image
                src="/logo.png"
                alt="Chase Logo"
                width={40}
                height={40}
                className="object-contain w-6 md:w-10 h-auto"
                priority
                />
              </div>
              <span className="text-lg md:text-2xl font-bold dark:text-on-surface-dark">Hide and Chase</span>
            </div>
            <Link 
              href="#waitlist" 
              className="px-6 py-2.5 bg-white text-primary rounded-button font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Join the Closed Beta
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-5xl sm:text-6xl mb-6 tracking-tight line-height-[1.5]">
          Real-World Chase Games in Your City
        </h1>
        <p className="text-xl sm:text-2xl text-body-large mb-10 opacity-95 font-normal">
          Inspired by shows like JetLag. Free to play. City-optimized game modes with real-time tracking. Explore your urban playground while outsmarting your opponents.
        </p>
        <Link 
          href="#waitlist"
          className="inline-block px-10 py-4 bg-white text-primary rounded-button font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          Join the Closed Beta
        </Link>
      </div>

    </header>
  )
}
