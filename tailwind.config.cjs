/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
            dark: '#0f172a',
            blue: '#38bdf8',
            cyan: '#22d3ee',
            indigo: '#818cf8',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
