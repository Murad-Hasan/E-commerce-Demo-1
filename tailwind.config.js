module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "button-blue": "#363853",
        "font-blue": "#22254D",
        "card-gray":"#EEEEEE"
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
        xl: "1224px",
        '2xl': "1224px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
