/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "640px",
      lg: "1024px",
    },
    colors: {
      VeryDarkBlue: "hsl(243, 87%, 12%)",
      DesaturatedBlue: "hsl(238, 22%, 44%)",
      BrightBlue: "hsl(224, 93%, 58%)",
      ModerateCyan: "hsl(170, 45%, 43%)",
      LightGrayishBlue: "hsl(240, 75%, 98%)",
      LightGray: "hsl(0, 0%, 75%)",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
