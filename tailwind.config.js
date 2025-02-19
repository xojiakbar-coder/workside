/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        1400: "1400px",
        1200: "1200px",
        1024: "1024px",
        992: "992px",
        768: "768px",
        576: "576px",
        400: "400px",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        marquee2: {
          to: { transform: "translateX(50%)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
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
        section: "var(--height)",
        "content-height": "var(--content-height)",
      },
      padding: {
        "btn-pdg": "var(--btn-padding)",
        "main-padding": "var(--padding)",
      },
      colors: {
        light: "var(--light)",
        danger: "var(--danger)",
        "item-color": "var(--item-color)",
        "gray-color": "var(--gray-color)",
        "black-color": "var(--black-color)",
        "hover-danger": "var(--hover-danger)",
        "border-color": "var(--border-color)",
        "dark-bg-color": "var(--dark-bg-color)",
        "body-bg-color": "var(--body-bg-color)",
        "subtitle-color": "var(--subtitle-color)",
        "ghost-bg-color": "var(--ghost-bg-color)",
        "primary-color": "var(--primary-color-bg-color)",
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
        home: `url("./assets/images/home.png")`,
        "sign-in": `url("./assets/images/signin-bg.png")`,
        "not-found": `url("./assets/images/not-found.png")`,
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        marquee: "marquee var(--duration, 60s) linear infinite",
        marquee2: "marquee2 var(--duration, 60s) linear infinite",
      },
    },
  },
  plugins: [],
};
