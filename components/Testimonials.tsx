export default function Testimonials() {
  const testimonials = [
    {
      quote: "As a huge JetLag fan, I've been dying to play something like this in my own city. Hide and Chase delivers exactly that experience—for free!",
      author: "Alex M.",
      location: "San Francisco, CA"
    },
    {
      quote: "The city-optimized modes are more intense than I expected. Used the subway system in ways I never thought possible. Strategic depth is incredible.",
      author: "Jordan K.",
      location: "New York, NY"
    },
    {
      quote: "Finally, a real-world adventure game that doesn't require flying to another continent. The custom game modes let us tailor it to our neighborhood perfectly.",
      author: "Sam T.",
      location: "London, UK"
    },
    {
      quote: "Chase Chain mode is absolute chaos in the best way. Three teams racing through the city, each hunting and being hunted. Pure adrenaline.",
      author: "Riley P.",
      location: "Chicago, IL"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-container dark:bg-surface-dark-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-on-surface dark:text-on-surface-dark">
          <span className="relative inline-block">
            Early Tester Reviews
            <svg
              className="absolute -bottom-3 left-0 w-full h-3 text-primary opacity-70"
              viewBox="0 0 200 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00025 6.99997C25.7501 2.67375 72.8444 -1.72477 197.994 4.09322"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-xl text-body-large text-center text-on-surface-variant dark:text-on-surface-dark-variant max-w-3xl mx-auto mb-16">
          Hear from players who've already experienced the thrill
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-surface dark:bg-surface-dark rounded-lg border border-outline/10 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-body-large text-on-surface dark:text-on-surface-dark mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-on-surface dark:text-on-surface-dark">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-on-surface-variant dark:text-on-surface-dark-variant">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
