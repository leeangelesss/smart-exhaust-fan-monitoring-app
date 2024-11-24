/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}