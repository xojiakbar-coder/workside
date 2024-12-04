/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0" },
          "60%": { backgroundPosition: "180px" },
          "100%": { backgroundPosition: "180px" },
        },
      },
      animation: {
        shine: "shine 3s infinite linear",
      },
      colors: {
        light: "var(----light)",
        "gray-color": "var(--grayColor)",
        "body-bg-color": "var(--bodyBgColor)",
        "dark-bg-color": "var(--darkBgColor)",
        "subtitle-color": "var(--subtitleColor)",
        "primary-btn": "var(--primaryBtnBgColor)",
      },
      fontFamily: {
        mont: "var(--mont)",
        grotesk: "var(--grotesk)",
      },
      boxShadow: {
        "login-shadow": "var(--loginShadow)",
        "navbar-shadow": "var(--navbarShadow)",
      },
      backgroundImage: {
        "sign-in": `url("./assets/image/signin-bg.png")`,
        "home-page": `url("./assets/image/home-page.png")`,
      },
    },
  },
  plugins: [],
};
