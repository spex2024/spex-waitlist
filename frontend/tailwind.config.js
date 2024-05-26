/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
      cormorant: ["Cormorant", "serif"],
      sora: ["Sora", "serif"],
      hanmlet: ["Hahmlet", "serif"],
    },
    fontWeight: {
      'extra-light': 200,
      light: 300,
      normal: 400,
      medium: 500,
      'semi-bold' : 600,
      bold : 700,
      'extra-bold':800,
      black :900
},
},
darkMode: "class",
    plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
