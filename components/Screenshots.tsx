'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  const screenshots = [
    { src: '/gameplay-map.gif', caption: 'Live gameplay: Watch teams navigate the city in real-time', isVideo: true },
    { src: '/screenshot-1.png', caption: 'Real-time position tracking' },
    { src: '/screenshot-2.png', caption: 'Teams and roles' },
    { src: '/screenshot-3.png', caption: 'Set up the play area' },
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
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-10 right-0 text-primary/5 w-[500px] h-[500px] translate-x-1/2"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 250 C 150 100, 350 400, 450 250"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-10 left-10 text-primary/5 w-[300px] h-[300px] -translate-x-1/2 translate-y-1/2"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           <path
            d="M20 150 C 80 50, 220 250, 280 150"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        {/* Dotted pattern */}
        <div className="absolute top-20 left-10 opacity-10">
          <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="text-primary" fill="currentColor" />
            </pattern>
            <rect width="100" height="100" fill="url(#dot-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900">
          See it in action
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Real gameplay footage and app features
        </p>

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
          {screenshots.slice(slidesPerView-1, screenshots.length+1).map((_, index) => (
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
