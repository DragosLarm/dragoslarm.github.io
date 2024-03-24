/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      // Hue: 220, Sat: 10%
      grey: {
        100: "#f1f2f4", // 95
        200: "#d5d7dd", // 85
        300: "#b9bdc6", // 75
        400: "#9da3af", // 65
        500: "#818898", // 55
        600: "#676f7e", // 45
        700: "#505662", // 35
        800: "#393e46", // 25
        900: "#22252a", // 15
      },
      white: {
        100: "#ffffff",
      },
    },
    extend: {},
  },
  plugins: [],
};
