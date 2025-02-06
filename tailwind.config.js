/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        itim: ['Itim', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
        redRose: ['Red Rose', 'sans-serif'],
        ysabeau: ['Ysabeau SC', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
