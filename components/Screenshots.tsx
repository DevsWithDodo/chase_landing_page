'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  const screenshots = [
    { src: '/screenshot-1.jpg', caption: 'Real-time position tracking' },
    { src: '/screenshot-2.jpg', caption: 'Teams and roles' },
    { src: '/screenshot-3.jpg', caption: 'Set up the play area' },
    { src: '/screenshot-4.PNG', caption: 'Configure custom game modes' }
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-12 text-gray-900">
          See it in action
        </h2>

        <div className="flex items-center gap-4 mt-12">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-12 h-12 flex-shrink-0 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:hover:border-gray-200 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Previous screenshot"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Screenshots Container */}
          <div className="flex-1 overflow-hidden rounded-2xl">
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
                    className="w-full max-w-[300px] h-auto rounded-2xl shadow-lg mb-4 mx-auto"
                  />
                  <p className="text-gray-600 font-medium">{screenshot.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === screenshots.length - 1}
            className="w-12 h-12 flex-shrink-0 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:hover:border-gray-200 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Next screenshot"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2.5 bg-gray-300 hover:bg-primary-dark'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
