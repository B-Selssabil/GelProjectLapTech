/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js, jsx, ts, tsx}",
    "./src/*.{html,js, jsx, ts, tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "rgba(99, 92, 197, 0.21)",
        color2: "#f5f2fe",
        color3: "rgba(85, 61, 174, 0.81)",
        color4: "#5b26ed",
        color5: "rgb(85 61 174)",
        color6:"#B1ADE2",
        footerColor: "#453C67",
      },
      
    },
  },
  plugins: [require("flowbite/plugin")],
};
