import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-surface-container dark:bg-surface-dark-container border-t border-outline/10">
      <div className="max-w-7xl mx-auto text-center">
        <a href="https://dodoapp.net" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
        <div className="inline-flex items-center gap-3 mb-4">
          <Image
          src="/dodo.png"
          alt="Chase Logo"
          width={40}
          height={40}
          className="w-10 h-auto"
          priority
          />
          <span className="text-xl font-semibold text-on-surface dark:text-on-surface-dark">Devs with the Dodo</span>
        </div>
          </a>

      </div>
    </footer>
  )
}
