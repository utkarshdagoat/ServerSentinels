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
        'blob' : "url(/home/camper/ServerSentinels/frontend/src/images/svgs/blob2.jpeg)",
      },
      maxWidth:{
        '3/5':'60%',
        '2/5':'40%',
        '1/6':'15%',
        '7/10':'70%'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

