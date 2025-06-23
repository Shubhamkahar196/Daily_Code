/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700: "#002b5b",   // for body
          500: "#183f6a", // for input
          200: "#153864", // for button text
          100: "#e6eaee" // for text on body
        },
        green:{
          500: "#7f95ac"   // for button
        }
      }
    },
  },
  plugins: [],
}

