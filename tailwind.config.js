/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-32px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        topSlide: {
          "0%": { transform: "translateY(-32px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        leftSlide: {
          "0%": { transform: "translateX(32px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        bottomSlide: {
          "0%": { transform: "translateY(32px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        slide: "slide .8s ease-in-out",
        topslide: "topSlide .8s ease-in-out",
        leftslide: "leftSlide .8s ease-in-out",
        bottomslide: "bottomSlide .8s ease-in-out",
      },
      colors: {
        body: "#F8F8F8",
        primary: "#171717",
        secondary: "#F9AA72",
        sec2:"#FC514C"
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
}