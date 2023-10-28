import { url } from "inspector";

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'blob1':"url(./src/images/src/blob1.jpg)",
        'blob' : "url(./src/images/svgs/Blob.jpeg)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

