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

      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(.22,.68,0,1.71)",
      },
      height: {
        "section-h": "var(--height)",
      },
      padding: {
        "main-padding": "var(--padding)",
      },
      colors: {
        light: "var(--light)",
        danger: "var(--danger)",
        "item-color": "var(--item-color)",
        "gray-color": "var(--gray-color)",
        "black-color": "var(--black-color)",
        "hover-danger": "var(--hover-danger)",
        "dark-bg-color": "var(--dark-bg-color)",
        "body-bg-color": "var(--body-bg-color)",
        "subtitle-color": "var(--subtitle-color)",
        "ghost-bg-color": "var(--ghost-bg-color)",
        "primary-btn": "var(--primary-btn-bg-color)",
        "outer-bdr-color": "var(--outer-border-color)",
      },
      fontFamily: {
        mont: "var(--mont)",
        jost: "var(--jost)",
      },
      boxShadow: {
        "login-shadow": "var(--login-shadow)",
        "light-shadow": "var(--light-shadow)",
        "navbar-shadow": "var(--navbar-shadow)",
      },
      backgroundImage: {
        "sign-in": `url("./assets/images/signin-bg.png")`,
      },
    },
  },
  plugins: [],
};
