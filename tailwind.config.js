/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "431px",
      md: "640px",
      lg: "1060px",
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
      open: ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      boxShadow: {
        shadowbtn: "2px 3px 6px rgba(0, 0, 0, 0.15925)",
        shadowbox: "0px 0px 10px 5px rgba(56, 56, 56, 0.0458843)",
      },
    },
  },
  plugins: [],
};
