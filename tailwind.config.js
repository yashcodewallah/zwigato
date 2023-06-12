/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
       rock:['RockSalt'],
       poppins:['poppins']
      },
      colors:{
        nav:"#FCFCFC",
        cardbg:"#FDE4E4",
        blueShade:"#212245",
        back:"#FCFCFC"
      }
    },

  },
  plugins: [],
}

