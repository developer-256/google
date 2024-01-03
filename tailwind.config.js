/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        googleText: '#f1f3f4',
        googleTitle: '#202124',
        googleNav: '#35363a',
      },
      fontFamily: {
        'googleFont': ['Product Sans', 'cursive'],
      }
    },
  },
  plugins: [],
}

