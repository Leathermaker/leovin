/** @type {import('tailwindcss').Config} */
import jakarta from '/src/assets/fonts/PlusJakartaSans-Bold.ttf'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/images/mainimg.png')",
        'leatherBanner': "url('./src/assets/images/leatheriamge2.png')",
      },
      fontFamily: {
        jakarta: [ 'PlusJakartaSans-Bold', "sans-serif"],
        // Add more custom font families as needed
      },
      screens: {
        '3xl': '1770px', // Add custom breakpoint for 1770px
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'), 
    require("@tailwindcss/typography"),
  ], 
}