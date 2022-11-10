/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        LightGrayishCyanBg: "hsl(180, 52%, 96%)", // (Background)
        LightGrayishCyan: "hsl(180, 31%, 95%)", //(Filter Tablets)
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        LeagueSpartan: "League Spartan, sans-serif",
      },
    },
  },
  plugins: [],
};
