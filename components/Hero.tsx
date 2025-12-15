'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative overflow-hidden gradient-adventure text-white pt-20 pb-20">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-surface dark:bg-surface-dark backdrop-blur-md border-b border-outline/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Image
              src="/logo.png"
              alt="Chase Logo"
              width={40}
              height={40}
              className="w-auto h-18"
              priority
              />
              <span className="text-2xl font-bold text-on-surface dark:text-on-surface-dark">Hide and Chase</span>
            </div>
            <Link 
              href="#waitlist" 
              className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-button font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-5xl sm:text-6xl lg:text-display-large font-extrabold mb-6 tracking-tight">
          Live urban adventure game
        </h1>
        <p className="text-xl sm:text-2xl text-body-large mb-10 opacity-95 font-normal">
          Gather your friends, choose a game mode, and explore the city while outsmarting your opponents in a transportation-based game.
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
