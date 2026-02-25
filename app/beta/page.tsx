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
  platform: string[]
  marketingConsent: boolean
  referralCode?: string
}

import Image from 'next/image'

export default function BetaSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [invitationCode, setInvitationCode] = useState('')

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
        const errorData = await response.json()
        throw new Error(errorData.error || 'Something went wrong')
      }

      const result = await response.json()
      setInvitationCode(result.invitationCode || '')
      setIsSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.')
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

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(invitationCode)
      alert('Code copied to clipboard!')
    } catch (err) {
      console.error('Error copying code:', err)
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
          <p className="text-on-surface-variant mb-6">
            Thanks for joining the Hide and Chase beta.
          </p>
          
          {/* Invitation Code Display */}
          {invitationCode && (
            <div className="mb-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
              <h3 className="text-sm font-medium text-on-surface-variant mb-2">
                Your Invitation Code
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <code className="flex-1 text-2xl font-bold text-primary bg-surface px-4 py-3 rounded-lg font-mono tracking-wider">
                  {invitationCode}
                </code>
                <button
                  onClick={handleCopyCode}
                  className="bg-primary text-on-primary p-3 rounded-lg hover:brightness-110 transition-all"
                  title="Copy code"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-on-surface-variant">
                Share this code with friends to ensure that they are also getting their spot in the closed beta!
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="mb-8 text-left bg-surface-container-high/50 p-5 rounded-lg border border-outline/10">
            <h3 className="text-lg font-semibold text-on-surface mb-3">Next Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-on-surface-variant">
              <li>Check your email for your welcome message</li>
              <li>Share your invitation code with friends</li>
              <li>Join our community to stay updated</li>
              <li>We'll notify you when you can download the game!</li>
            </ol>
          </div>
          
          <div className="flex flex-col gap-3">
             <button 
                onClick={handleShare}
                className="w-full bg-primary text-on-primary px-6 py-3 rounded-full font-medium transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                Share Link
              </button>
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || 'https://discord.gg/hideandchase'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-on-primary px-6 py-3 rounded-full font-medium transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
                Join Discord
              </a>

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

        <form onSubmit={handleSubmit(onSubmit)} className="bg-surface rounded-xl shadow-lg border border-outline/10 p-6 sm:p-10 space-y-8" suppressHydrationWarning>
          
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
                  suppressHydrationWarning
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
                  suppressHydrationWarning
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
                  suppressHydrationWarning
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
                  suppressHydrationWarning
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
              Which social media platforms do you use most?
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
                Preferred game duration
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

            <div className="space-y-3">
              <label className="block text-sm font-medium text-on-surface-variant">
                Platform where you want to play
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['iOS', 'Android'].map((plat) => (
                  <label key={plat} className="flex items-center space-x-3 p-3 rounded-lg border border-outline/10 hover:bg-surface-container hover:border-primary/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      value={plat}
                      {...register("platform", { required: true })}
                      className="w-4 h-4 accent-primary rounded border-gray-300 focus:ring-primary"
                    />
                    <span className="text-sm text-on-surface">{plat}</span>
                  </label>
                ))}
              </div>
              {errors.platform && <span className="text-error text-sm">Please select at least one platform</span>}
            </div>
          </div>

          {/* Trust & Updates */}
          <div className="space-y-4 pt-4 border-t border-outline/10">
             <div className="bg-surface-container-high/50 p-4 rounded-lg text-sm text-on-surface-variant border border-primary/10">
                <p>
                  <span className="font-semibold text-primary">Why the detailed questions?</span> As a small team with limited capacity, we prioritize applicants who demonstrate a genuine interest in active testing and providing feedback during the beta phase.
                </p>
             </div>

             <div>
               <label className="block text-sm font-medium text-on-surface-variant mb-2">
                 Invitation Code (Optional)
               </label>
               <input
                 {...register("referralCode")}
                 className="w-full px-4 py-2 rounded-lg bg-surface-container-highest border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface transition-all"
                 placeholder="Enter a friend's code"
                 onChange={(e) => {
                   e.target.value = e.target.value.toUpperCase()
                 }}
                 suppressHydrationWarning
               />
               <p className="text-xs text-on-surface-variant mt-1">
                 Have a code from a friend? Enter it here to guarantee your beta access.
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
              suppressHydrationWarning
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
