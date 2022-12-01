/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-hover': 'rgba(15, 20, 25, 0.1)',
        'main-hover': "rgb(29, 155, 240, 0.1)"
      }
    }
  },
  plugins: [],
}
