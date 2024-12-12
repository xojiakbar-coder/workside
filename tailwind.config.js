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

      colors: {
        light: "var(--light)",
        danger: "var(--danger)",
        "item-color": "var(--itemColor)",
        "gray-color": "var(--grayColor)",
        "body-bg-color": "var(--bodyBgColor)",
        "dark-bg-color": "var(--darkBgColor)",
        "ghost-bg-color": "var(--ghostBgColor)",
        "subtitle-color": "var(--subtitleColor)",
        "primary-btn": "var(--primaryBtnBgColor)",
        "outer-bdr-color": "var(--outer-border-color)",
      },
      fontFamily: {
        mont: "var(--mont)",
        grotesk: "var(--grotesk)",
      },
      boxShadow: {
        "login-shadow": "var(--loginShadow)",
        "light-shadow": "var(--lightShadow)",
        "navbar-shadow": "var(--navbarShadow)",
      },
      backgroundImage: {
        "file-image": `url("./assets/icons/file.svg")`,
        "sign-in": `url("./assets/images/signin-bg.png")`,
      },
    },
  },
  plugins: [],
};
