const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ['Satisfy'],
        'roboto-cond': ['Roboto Condensed'],
        'roboto-mono': ['Roboto Mono']
      },
      colors: {
        ...defaultTheme.colors,
        text: 'var(--jm-main-text-color)'
      }
    },
  },
  plugins: [],
}

