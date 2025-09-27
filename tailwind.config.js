/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'custom-gray': '#F4F4F4',
        'custom-dark': '#2A262B',
        'custom-dark-section': '#484148',
        'custom-dark-border': '#3A343B',
      },
      maxWidth: {
        'custom': '1280px',
      }
    },
  },
  plugins: [],
}
