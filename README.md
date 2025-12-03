# Hide and Chase - Landing Page

A modern, responsive landing page for the Hide and Chase urban adventure game built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with smooth animations
- 🎨 Built with Next.js 15, TypeScript, and Tailwind CSS
- 📱 Mobile-first approach with full responsive support
- 🖼️ Interactive screenshot carousel with navigation
- 📧 Waitlist signup form with localStorage persistence
- 🚀 Optimized for performance and SEO
- 📦 Static export ready for easy deployment

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
landing-page/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   ├── Hero.tsx          # Hero section with navigation
│   ├── Features.tsx      # Features grid
│   ├── Screenshots.tsx   # Screenshot carousel
│   ├── Waitlist.tsx      # Email signup form
│   └── Footer.tsx        # Footer section
├── public/               # Static assets
│   ├── hero-screenshot.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   ├── screenshot-3.png
│   ├── screenshot-4.png
│   └── screenshot-5.png
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate a static export in the `out/` directory that can be deployed to any static hosting service.

## Deployment

The app is configured for static export (`output: 'export'` in `next.config.ts`), making it easy to deploy to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#6366f1',
    dark: '#4f46e5',
  },
  secondary: '#8b5cf6',
}
```

### Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Features**: Modify the features array in `components/Features.tsx`
- **Screenshots**: Update screenshot data in `components/Screenshots.tsx`
- **Waitlist**: Configure form behavior in `components/Waitlist.tsx`

### API Integration

To connect the waitlist form to your backend API:

1. Open `components/Waitlist.tsx`
2. Update the API endpoint in the `handleSubmit` function:

```typescript
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
})
```

## Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) via next/font

## License

This project is part of the Hide and Chase urban adventure game.

## Support

For questions or issues, please contact the Devs with the Dodo team.
