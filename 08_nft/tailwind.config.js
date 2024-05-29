/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#1C121F",
        primary: "#FFCE4E",
        secondary: "FDE8B3",
        light: "#F5FBF2",
        gray: "#9B9E9A",
        purple: "#3D2942",
        lightPurple: "#BDAAC1",
        mediumPurple: "#76607A",
      },
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
      },
    },
    screens: {
      xs: "425px",
      ss: "575px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
