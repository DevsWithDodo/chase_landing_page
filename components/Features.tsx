export default function Features() {
  const features = [
    {
      icon: '🛰️',
      title: 'Real-Time GPS Tracking',
      description: 'Reliable location sharing keeps everyone on the map. See team positions update live or according to your custom interval settings.',
    },
    {
      icon: '⚙️',
      title: 'Strategic Rulesets',
      description: 'Customize visibility with periodicity (e.g. every 5 min), proximity reveals, or headstarts. You define exactly how the game feels.',
    },
    {
      icon: '🎮',
      title: 'Multiple Game Modes',
      description: 'Use our presets to play classic Mister X or Chase Chain without any setup hustle. Or build your own mode from scratch to fit your playstyle.',
    },
    {
      icon: '🎯',
      title: 'Free Forever',
      description: 'No subscription fees, no pay-to-win mechanics. Just pure real-world strategy and exploration. A free alternative to expensive adventure games.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface relative overflow-hidden">
      {/* Decorative subway lines */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-on-surface dark:text-on-surface-dark">
          Why <span className="text-primary font-semibold">Hide and Chase</span>?
        </h2>
        <p className="text-xl text-body-large text-center text-on-surface-variant dark:text-on-surface-dark-variant max-w-3xl mx-auto mb-16 leading-relaxed">
          If you love the thrill of real-world adventure shows, now you can experience it in your own city: without the production crew or travel budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-surface-container dark:bg-surface-dark-container-highest rounded-md transition-all hover:-translate-y-2 hover:shadow-lg border border-outline/10"
            >
              <div className="w-12 h-12 mb-6 bg-primary/10 rounded-sm flex items-center justify-center text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-title-large font-bold mb-4 text-on-surface dark:text-on-surface-dark">{feature.title}</h3>
              <p className="text-body-medium text-on-surface-variant dark:text-on-surface-dark-variant leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
