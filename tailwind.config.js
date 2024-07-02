/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        lightPurple: "#F6E7FF",
        navy: "#3B4D66",
        greyNavy: "#626C7F",
        lightGrey: "#F4F6FA",
        darkNavy: "#313E51",
        lightBluish: "#ABC1E1",
        error: "#EE5454",
        success: "#26D782",
      },
      fontFamily: {
        RubikScribble: ["RubikScribble", "sans-serif"],
        RubikScribbleBold: ["RubikScribbleBold", "sans-serif"],
        RubikScribbleItalic: ["RubikScribbleItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
