/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryBlue:"#405DE6"
      },
      fontFamily: {
        dancing:['Dancing Script', 'cursive'],
        popin:['Poppins']
      },
      height:{
        "6vh":"6vh",
        "89vh":"89vh",
        "94vh":"94vh",
        "5vh":"5vh",
        "80vh":"80vh"
      },
      width:{
        "20vw":"20vw",
        "80vw":"80vw"
      },
      minHeight:{
        "89vh":"89vh"
      }
    },
  },
  plugins: [],
}

