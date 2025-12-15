export default function Features() {
  const features = [
    {
      icon: '🕵️',
      title: 'Mister X',
      description: 'Our take on the famous board game. Track Mister X, who reveals their location at every 10 minutes!',
    },
    {
      icon: '🏃',
      title: 'Chase Chain',
      description: 'Chase a team, while being chased by another! The last team standing wins.',
    },
    {
      icon: '⚙️',
      title: 'Or design your own game mode!',
      description: 'The system is flexible enough to create unique rules, territories, and gameplay mechanics tailored to your adventure.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-headline-large font-extrabold text-center mb-4 text-on-surface dark:text-on-surface-dark">
          What is Hide and Chase?
        </h2>
        <p className="text-xl text-body-large text-center text-on-surface-variant dark:text-on-surface-dark-variant max-w-3xl mx-auto mb-16 leading-relaxed">
          Hide and Chase is the new urban adventure game optimized for city environments, using public transportation or other means of travel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-surface-container-highest dark:bg-surface-dark-container-highest rounded-md transition-all hover:-translate-y-2 hover:shadow-lg border border-outline/10"
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
