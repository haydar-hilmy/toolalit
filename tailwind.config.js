/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
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
      "primary-light": ["#c0c0c0"],
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
        'html': {
          scrollBehavior: 'smooth',
        },
        'body': {
          backgroundColor: theme('backgroundColor.primary-dark'),
          color: theme('colors.primary-light'),
        },
        '::-webkit-scrollbar': {
          width: '7px',
          height: '4px',
        },
        '::-webkit-scrollbar-track': {
          background: '#4949492c',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#424242',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
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

