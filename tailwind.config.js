module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm:'640px',
        md:'768px',
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
