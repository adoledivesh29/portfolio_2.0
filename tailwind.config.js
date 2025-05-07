/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customHeading: ['YesevaOne-Regular', 'sans-serif'],
        customPara: ['Karla-VariableFont_wght', 'sans-serif'],
      },
      spacing: {
        '800': '800px',
      },
      fontSize: {
        '6xl': '3.3rem',
      },
      lineHeight: {
        'slogan-leading': '7.5rem',
      },
    },
  },
  plugins: [],
}

