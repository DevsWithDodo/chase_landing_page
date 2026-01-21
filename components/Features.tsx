export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Free Forever',
      description: 'No subscription fees, no pay-to-win mechanics. Just pure real-world strategy and exploration. A free alternative to expensive adventure games.',
    },
    {
      icon: '🏙️',
      title: 'City-Optimized Modes',
      description: 'Designed specifically for urban environments. Use public transit, navigation shortcuts, and local knowledge to gain the advantage. More intense than traditional formats.',
    },
    {
      icon: '🎮',
      title: 'Multiple Game Modes',
      description: 'Mister X (track the fugitive), Chase Chain (multi-team pursuit), or create custom rules. Each mode offers unique strategic challenges and replayability.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-on-surface dark:text-on-surface-dark">
          Why Hide and Chase?
        </h2>
        <p className="text-xl text-body-large text-center text-on-surface-variant dark:text-on-surface-dark-variant max-w-3xl mx-auto mb-16 leading-relaxed">
          If you love the thrill of real-world adventure shows, now you can experience it in your own city—without the production crew or travel budget.
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
