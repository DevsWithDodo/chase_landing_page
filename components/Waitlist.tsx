'use client'

import { useState, FormEvent, useEffect } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user already signed up
    if (localStorage.getItem('chaseTheGameWaitlist') === 'true') {
      setSubmitted(true)
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email.trim()) {
      alert('Please enter your email address!')
      return
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        localStorage.setItem('chaseTheGameWaitlist', 'true')
      } else {
        alert(data.error || 'An error occurred. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      alert('Failed to join waitlist. Please check your connection and try again.')
    }
  }

  // Prevent hydration mismatch by not rendering form until mounted
  if (!mounted) {
    return (
      <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 gradient-adventure text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl text-display-medium font-extrabold mb-4">
            Join the Closed Beta!
          </h2>
          <p className="text-xl text-body-large mb-12 opacity-95 leading-relaxed">
            Be among the first to experience Chase the Game! 
            Enter your email and we'll notify you when the beta version is available.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 gradient-adventure text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl text-display-medium font-extrabold mb-4">
          Join the Closed Beta!
        </h2>
        <p className="text-xl text-body-large mb-12 opacity-95 leading-relaxed">
          Be among the first to experience Chase the Game! 
          Enter your email and we'll notify you when the beta version is available.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="flex-1 max-w-md px-6 py-4 border-2 border-white/30 rounded-sm text-base bg-white/10 text-white placeholder-white/70 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:bg-white/20"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-white text-primary rounded-button font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-sm opacity-80">
              We don't send spam. We'll only notify you when the beta launches.
            </p>
          </form>
        ) : (
          <div className="mt-8 p-6 bg-primary/20 border-2 border-white/50 rounded-md">
            <p className="text-lg font-semibold">
              ✅ Successfully signed up! We'll contact you soon with beta access.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
