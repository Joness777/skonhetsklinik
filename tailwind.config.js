/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      colors: {
        'blush-pink': '#F8D7DA',
        'light-pink': '#FFF1F2',
        'gold': '#D4AF37',
        'gold-light': '#F5EED6',
        'charcoal': '#333333',
      },
    },
  },
  plugins: [],
} 