'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  const screenshots = [
    { src: '/screenshot-1.png', caption: 'Real-time position tracking and game summary' },
    { src: '/screenshot-2.png', caption: 'Teams and roles setup' },
    { src: '/screenshot-4.png', caption: 'Configure custom game modes' },
  ]

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative subway lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        {/* Blue Line - Full Height */}
        <svg
          className="absolute top-0 right-[100px] w-[40px] h-full overflow-visible"
          viewBox="0 0 40 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="20" y1="0" x2="20" y2="100%" vectorEffect="non-scaling-stroke" className="text-subway-blue" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
        </svg>
        <svg
             className="absolute top-[200px] right-[100px] w-[40px] h-[40px] overflow-visible pointer-events-none"
             viewBox="0 0 40 40"
             xmlns="http://www.w3.org/2000/svg" 
        >
            <circle cx="20" cy="20" r="14" className="text-white fill-current stroke-subway-blue" strokeWidth="6" />
        </svg>

        <svg
          className="absolute top-0 right-0 w-[500px] h-[500px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           {/* Green Line Top Right */}
          <path
             d="M 200 0 V 220 A 40 40 0 0 0 240 260 H 400"
            className="text-subway-green"
             stroke="currentColor"
             strokeWidth="16"
             strokeLinecap="round"
          />
          <circle cx="350" cy="260" r="14" className="text-white fill-current stroke-subway-green" strokeWidth="6" />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           {/* Red Line Bottom Left */}
           <path
            d="M 0 150 H 150 A 40 40 0 0 1 190 190 V 400"
            className="text-subway-red"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="100" cy="150" r="14" className="text-white fill-current stroke-subway-red" strokeWidth="6" />

           {/* Yellow Line Bottom Left */}
           <path
            d="M 0 250 H 250 A 40 40 0 0 1 290 290 V 400"
            className="text-subway-yellow"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="200" cy="250" r="14" className="text-white fill-current stroke-subway-yellow" strokeWidth="6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900">
          See it in action
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Real gameplay footage and app features
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
          {/* Previous Button (Desktop) */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="hidden sm:flex w-12 h-12 flex-shrink-0 rounded-full border-2 border-gray-200 bg-white items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:hover:border-gray-200 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Previous screenshot"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Screenshots Container */}
          <div className="w-full sm:flex-1 overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 text-center px-4">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.caption}
                    width={300}
                    height={533}
                    className="w-full max-w-[300px] h-auto rounded-2xl shadow-lg mb-4 mx-auto bg-surface"
                  />
                  <p className="text-gray-600 font-medium">{screenshot.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button (Desktop) */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === screenshots.length - slidesPerView}
            className="hidden sm:flex w-12 h-12 flex-shrink-0 rounded-full border-2 border-gray-200 bg-white items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:hover:border-gray-200 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Next screenshot"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden justify-center gap-8 w-full mt-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous screenshot"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === screenshots.length - slidesPerView}
              className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next screenshot"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.slice(slidesPerView-1, screenshots.length+1).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2.5 bg-gray-300 hover:bg-primary'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
