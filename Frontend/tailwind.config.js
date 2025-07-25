/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.9" }, // Changed from 1 to 0.6 for a more subtle effect
        },
      },
    },
  },
  plugins: [],
};