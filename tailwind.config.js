/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#323334",
        yellow:"#FFEAAE",
        darkYellow:"#FCCA3F",
        orange:"#F6820c",
        purple:"#5F00D9"

      }
    },
  },
  plugins: [],
}

