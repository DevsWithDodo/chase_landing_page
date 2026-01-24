'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  city: string
  country: string
  socials: string[]
  playPartners: string[]
  duration: string
  marketingConsent: boolean
}

import Image from 'next/image'

export default function BetaSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      setIsSuccess(true)
    } catch (err) {
      setError('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Hide and Chase Beta',
      text: 'I just joined the Hide and Chase beta waitlist!',
      url: window.location.origin,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.origin)
        alert('Link copied to clipboard!')
      }
    } catch (err) {
      console.error('Error sharing:', err)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-surface-container-low flex items-center justify-center relative overflow-hidden">
        {/* Decoration Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
            <svg className="absolute top-0 left-0 w-[500px] h-[500px]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 80 0 V 120 A 40 40 0 0 1 40 160 H -400" className="text-subway-red" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
                <path d="M 160 0 V 80 A 40 40 0 0 1 120 120 H -400" className="text-subway-yellow" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
            </svg>
             <svg className="absolute bottom-0 right-0 w-[500px] h-[500px]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M 400 120 H 160 A 40 40 0 0 0 120 160 V 400" className="text-subway-blue" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
               <path d="M 400 220 H 80 A 40 40 0 0 0 40 260 V 400" className="text-subway-green" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
            </svg>
        </div>

        <div className="max-w-md w-full bg-surface p-8 rounded-lg shadow-lg text-center border border-outline/10 relative z-10">
          <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-on-surface">You're on the list!</h2>
          <p className="text-on-surface-variant mb-8">
            Thanks for joining the Hide and Chase beta. We'll be in touch soon with your access code.
          </p>
          
          <div className="flex flex-col gap-3">
             <button 
                onClick={handleShare}
                className="w-full bg-primary text-on-primary px-6 py-3 rounded-full font-medium transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                Share Link
              </button>

              <Link 
                href="/"
                className="w-full inline-block bg-transparent text-primary hover:bg-primary/5 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Back to Home
              </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-container-low relative overflow-hidden">
       {/* Detailed Subway Lines Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute top-0 left-0 w-[500px] h-[500px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red Line */}
          <path
            d="M 80 0 V 120 A 40 40 0 0 1 40 160 H -400"
            className="text-subway-red"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="80" cy="60" r="14" className="text-surface fill-current stroke-subway-red" strokeWidth="6" />

          {/* Yellow Line */}
          <path
            d="M 160 0 V 80 A 40 40 0 0 1 120 120 H -400"
            className="text-subway-yellow"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
           <circle cx="40" cy="120" r="14" className="text-surface fill-current stroke-subway-yellow" strokeWidth="6" />
        </svg>

        <svg
          className="absolute bottom-0 right-0 w-[500px] h-[500px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           {/* Blue Line */}
           <path
            d="M 400 120 H 160 A 40 40 0 0 0 120 160 V 400"
            className="text-subway-blue"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="280" cy="120" r="14" className="text-surface fill-current stroke-subway-blue" strokeWidth="6" />

           {/* Green Line */}
           <path
            d="M 400 220 H 80 A 40 40 0 0 0 40 260 V 400"
            className="text-subway-green"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="40" cy="340" r="14" className="text-surface fill-current stroke-subway-green" strokeWidth="6" />
        </svg>
      </div>

       {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-center items-center max-w-7xl mx-auto">
         <Link href="/" className="flex justify-center items-center gap-3 group">
              <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform'>
                <Image
                src="/logo.png"
                alt="Chase Logo"
                width={40}
                height={40}
                className="object-contain w-8 h-auto"
                priority
                />
              </div>
              <span className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Hide and Chase</span>
         </Link>
      </nav>

      <div className="max-w-2xl mx-auto pt-32 pb-12 px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Join the Beta
          </h1>
          <p className="text-lg text-on-surface-variant">
            Help us test the future of real-world gaming.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-surface rounded-xl shadow-lg border border-outline/10 p-6 sm:p-10 space-y-8">
          
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-on-surface border-b border-outline/10 pb-2">
              About You
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Name / Nickname
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 rounded-lg bg-surface-container-highest border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface transition-all"
                  placeholder="Agent 007"
                />
                {errors.name && <span className="text-error text-sm mt-1">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-2 rounded-lg bg-surface-container-highest border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface transition-all"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="text-error text-sm mt-1">Valid email is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  City
                </label>
                <input
                  {...register("city", { required: true })}
                  className="w-full px-4 py-2 rounded-lg bg-surface-container-highest border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface transition-all"
                  placeholder="New York"
                />
                {errors.city && <span className="text-error text-sm mt-1">City is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Country
                </label>
                <input
                  {...register("country", { required: true })}
                  className="w-full px-4 py-2 rounded-lg bg-surface-container-highest border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface transition-all"
                  placeholder="USA"
                />
                {errors.country && <span className="text-error text-sm mt-1">Country is required</span>}
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-on-surface border-b border-outline/10 pb-2">
              Social Media
            </h3>
            <p className="text-sm text-on-surface-variant">
              Which platforms do you use most?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Instagram', 'TikTok', 'Twitter / X', 'Facebook', 'Reddit', 'Discord'].map((platform) => (
                <label key={platform} className="flex items-center space-x-3 p-3 rounded-lg border border-outline/10 hover:bg-surface-container hover:border-primary/50 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    value={platform}
                    {...register("socials")}
                    className="w-4 h-4 accent-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-on-surface">{platform}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-on-surface border-b border-outline/10 pb-2">
              Gameplay Preferences
            </h3>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium text-on-surface-variant">
                Who would you play with?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Friends & Family',
                  'Workmates & Classmates', 
                  'Communities & Clubs',
                  'Strangers (Matchmaking)'
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-3 p-3 rounded-lg border border-outline/10 hover:bg-surface-container hover:border-primary/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      value={option}
                      {...register("playPartners")}
                      className="w-4 h-4 accent-primary rounded border-gray-300 focus:ring-primary"
                    />
                    <span className="text-sm text-on-surface">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-on-surface-variant">
                Preferred Game Duration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['< 1 hour', '1-2 hours', '2-4 hours', '> 4 hours'].map((time) => (
                  <label key={time} className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline/10 hover:bg-surface-container hover:border-primary/50 cursor-pointer transition-all text-center">
                    <input
                      type="radio"
                      value={time}
                      {...register("duration", { required: true })}
                      className="mb-2 accent-primary focus:ring-primary"
                    />
                    <span className="text-sm text-on-surface">{time}</span>
                  </label>
                ))}
              </div>
              {errors.duration && <span className="text-error text-sm">Please select a duration</span>}
            </div>
          </div>

          {/* Trust & Updates */}
          <div className="space-y-4 pt-4 border-t border-outline/10">
             <div className="bg-surface-container-high/50 p-4 rounded-lg text-sm text-on-surface-variant border border-primary/10">
                <p>
                  <span className="font-semibold text-primary">Why the detailed questions?</span> As a small team with limited capacity, we prioritize applicants who demonstrate a genuine interest in active testing and providing feedback during the beta phase.
                </p>
             </div>

             <label className="flex items-start space-x-3 p-0 cursor-pointer group">
                <input
                  type="checkbox"
                  {...register("marketingConsent", { required: true })}
                  className="mt-0.5 w-4 h-4 accent-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-sm text-on-surface group-hover:text-primary transition-colors">
                  I consent to receiving project updates and important announcements about the beta via email.
                </span>
             </label>
             {errors.marketingConsent && <span className="text-error text-sm block ml-9">Confirmation is required to join</span>}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary py-3 rounded-full font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
            {error && <p className="text-error text-center mt-4">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}
