/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Amore', 'sans-serif'],
      },
      spacing: {
        '34rem': '34rem',
      },
      fontSize: {
        '6xl': '3.3rem',
      },
    },
  },
  plugins: [],
}

