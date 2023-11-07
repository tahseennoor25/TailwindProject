/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightColors: "#F4511F",
        backbroundColor: "#b7bca9",
        lightText: "#959595",
      }
    },
  },
  plugins: [],
}

