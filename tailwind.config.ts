import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0d0d0d',
          white: '#f2f2f2',
          gray: '#a3a3a3',
          accent: '#ff0055',
        },
      },
    },
  },
  plugins: [],
}

export default config