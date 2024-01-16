/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        old: ["Old English Five"],
        poppins: ["Poppins"],
      },
      colors: {
        sole: "#CBD6CC",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
