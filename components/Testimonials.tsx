import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My friends and I love Jet Lag and wanted to do something similar in Budapest. This app actually let us pull it off without looking crazy trying to organize it manually. High recommendations for a fun weekend.",
      author: "Viktor S.",
      location: "Budapest, HU",
      image: "/testimonials/viktor.png"
    },
    {
      quote: "Honestly surprised by how intense it got. We thought we'd just be strolling around Florence, but we ended up sprinting to catch the next bus. The map works really well.",
      author: "Saci K.",
      location: "Florence, IT",
      image: "/testimonials/saci.png"
    },
    {
      quote: "Used this for a friend's birthday. We played the standard fugitive mode. It took a minute to set up the rules, but once we started running it was hilarious. Way better than a standard scavenger hunt.",
      author: "Sara V.",
      location: "Heidelberg, DE",
      image: "/testimonials/sari.png"
    },
    {
      quote: "The Chase Chain mode is madness. We had four teams running around. Only advice: bring a power bank because the GPS uses battery. But yeah, totally worth it.",
      author: "Abel K.",
      location: "Manchester, UK",
      image: "/testimonials/abel.png"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-on-surface">
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
        <p className="text-xl text-body-large text-center text-on-surface-variant max-w-3xl mx-auto mb-16">
          Hear from players who've already experienced the thrill
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 bg-surface rounded-lg border border-outline/10 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-body-large text-on-surface mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-low flex items-center justify-center">
                    <Image
                      src={testimonial.image!}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                ) : (
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author[0]}
                </div>
                )}
                <div>
                  <p className="font-semibold text-on-surface">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-on-surface-variant">
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
