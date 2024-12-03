/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "var(--mont)",
        jet: "var(--jet)",
      },
    },
  },
  plugins: [],
};
