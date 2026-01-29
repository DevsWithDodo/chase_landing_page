import Link from 'next/link'

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 gradient-adventure text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl text-display-medium font-semibold mb-4">
          Ready to Play?
        </h2>
        <p className="text-xl text-body-large mb-12 opacity-95" style={{ lineHeight: '1.25' }}>
          Join our closed beta and be among the first to experience real-world chase games in your city.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="/beta"
            className="inline-block px-10 py-4 bg-white text-primary rounded-button font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Join Closed Beta →
          </Link>
          <a
            href="https://reddit.com/r/HideAndChase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white rounded-button font-bold text-lg transition-all hover:-translate-y-1 hover:bg-white/10"
          >
            Join Community →
          </a>
        </div>

        {/* Community Section */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <h3 className="text-2xl font-semibold mb-4">Join Our Growing Community</h3>
          <p className="text-lg opacity-90 mb-6">
            Connect with other players on Reddit for strategy tips, city recommendations, and the latest game updates.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <span>Strategy Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🗺️</span>
              <span>City Route Tips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <span>Game Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span>Find Players</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
