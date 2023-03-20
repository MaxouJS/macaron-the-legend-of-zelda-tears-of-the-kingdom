/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial',],
      'serif': ['Merriweather',],
      'display': ['Bebas Neue',],
    },
  },
  plugins: [],
};
