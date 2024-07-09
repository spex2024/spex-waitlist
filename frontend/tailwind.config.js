/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      myriad: ['Myriad Pro', 'sans-serif']


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
    plugins: [require("tw-elements-react/dist/plugin.cjs"),  nextui()]
}
