import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16684D',
          container: '#368265',
        },
        secondary: {
          DEFAULT: '#3D646F',
          container: '#AAD3DF',
        },
        tertiary: {
          DEFAULT: '#894D51',
          container: '#FCB0B3',
        },
        error: {
          DEFAULT: '#BA1A1A',
          container: '#FFDAD6',
        },
        surface: {
          DEFAULT: '#F7FAF6',
          dim: '#D8DBD7',
          bright: '#F7FAF6',
          'container-lowest': '#FFFFFF',
          'container-low': '#F1F4F0',
          container: '#ECEFEA',
          'container-high': '#E6E9E5',
          'container-highest': '#E0E3DF',
        },
        'on-surface': {
          DEFAULT: '#181C1A',
          variant: '#3F4943',
        },
        'on-primary': {
          DEFAULT: '#FFFFFF',
          container: '#FFFFFF',
        },
        'on-secondary': {
          DEFAULT: '#FFFFFF',
          container: '#051F23',
        },
        'on-tertiary': {
          DEFAULT: '#FFFFFF',
          container: '#311013',
        },
        'on-error': {
          DEFAULT: '#FFFFFF',
          container: '#410002',
        },
        outline: {
          DEFAULT: '#6F7973',
        },
        subway: {
          red: '#ed342a',
          yellow: '#ffd502',
          blue: '#0067af',
          green: '#42a742',
        }
      },
      spacing: {
        'xs': '6px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '28px',
        'button': '100px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'lg': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'xl': '0 8px 32px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
}

export default config
