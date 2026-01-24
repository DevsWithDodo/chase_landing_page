import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-surface-container border-t border-outline/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <a href="https://dodoapp.net" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/dodo.png"
                alt="Dodo Logo"
                width={40}
                height={40}
                className="w-10 h-auto"
                priority
              />
              <span className="text-xl font-semibold text-on-surface">Devs with the Dodo</span>
            </div>
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a 
              href="https://reddit.com/r/YourSubreddit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Reddit Community
            </a>
            <Link 
              href="/beta" 
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Join Beta
            </Link>
            <Link
              href="/privacy"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-on-surface-variant border-t border-outline/10 pt-6">
          <p className="mb-2">
            Inspired by adventure shows and real-world exploration games. Independently created free game.
          </p>
          <p>
            © {new Date().getFullYear()} Hide and Chase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
