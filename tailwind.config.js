/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      grey: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      green: {
        100: "#f0f0f0",
        500: "#9ebc8f",
        600: "#83a970",
        700: "#698f56",
        800: "#737b8c", // 800: "#555555",
        900: "#3a5030",
      },
      red: {
        50: "#FFEBEE",
        100: "#FFCDD2",
        200: "#EF9A9A",
        300: "#E57373",
        400: "#EF5350",
        500: "#F44336",
        600: "#E53935",
        700: "#D32F2F",
        800: "#C62828",
        900: "#B71C1C",
      },
    },
    extend: {},
  },
  plugins: [],
};
