/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryBlue:"#405DE6"
      },
      fontFamily: {
        dancing:['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

