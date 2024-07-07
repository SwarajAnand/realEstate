/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xsm': '400px',
      'sm': '640px',
      'vsm': '300px',
    },
  },
  plugins: [],
}