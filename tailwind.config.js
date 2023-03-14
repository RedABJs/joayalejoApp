/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "saxp-pattern": "url('./public/saxo.jpg')",
      },
    },
    colors: {
      redwine: "#710000",
      white: "#f1f1f1",
      gold: {
        50: "#ffe169",
        100: "#fad643",
        200: "#edc531",
        300: "#dbb42c",
        400: "#c9a227",
        500: "#b69121",
        600: "#a47e1b",
        700: "#926c15",
        800: "#805b10",
        900: "#76520e",
      },
      black: "#202020",
      dark_gray: "#333533",
      gray: {
        100: "#d6d6d6",
        200: "#bababa",
        300: "#7d7d7d",
        400: "#3b3b3b",
        500: "#1f1f1f",
      },
    },
  },
  plugins: [],
};
