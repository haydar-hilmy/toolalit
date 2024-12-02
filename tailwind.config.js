/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      }
    },
    colors: {
      primary: ["#2a2a2a"],
      "primary-light": ["#E7E7E7"],
      'selection-bg': '#bfb9f9',
      'selection-text': '#000',
    },
    backgroundColor: {
      "primary": "#FFFBF3",
      "primary-dark": "#0b0a14",
      'secondary-dark': "#0d0d10",
      'btn-primary': "#1d4ed8", // bg-blue-700
      'btn-secondary': "#1e1e1e",
      'btn-disabled': "#1e1e1e9c",
      'btn-special': '#581c87', // purple
      'btn-success': '#156233',
      'btn-error': '#e74c3c',
      'btn-warning': '#b91c1c' // red
    }
  },
  plugins: [
    plugin(function ({ addBase, theme, addUtilities }) {
      addBase({
        'body': {
          backgroundColor: theme('backgroundColor.primary-dark'),
          color: theme('colors.primary-light'),
        },
      });
      addUtilities({
        '::selection': {
          backgroundColor: theme('colors.selection-bg'),
          color: theme('colors.selection-text'),
        },
        '::-moz-selection': {
          backgroundColor: theme('colors.selection-bg'),
          color: theme('colors.selection-text'),
        },
      });
    }),
  ],
}

