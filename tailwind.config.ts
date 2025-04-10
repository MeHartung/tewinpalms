import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2f89fc',
        grayText: '#3f3f3f',
        darkBlue: '#0a1e40',
        lightGray: '#f8f8f8',
      },
      fontSize: {
        base: '15px',
      },
      lineHeight: {
        relaxed: '1.4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config