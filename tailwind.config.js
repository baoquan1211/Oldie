/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Open Sans", "sans-serif"],
        secondaryFont: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        bgColor: "#FFB30E",
        Color1: "#FEEFD0",
        Color2: "#F17228",
      },
      backgroundImage: {
        linearBg1:
          "linear-gradient(92.84deg, #FFB800 -47.72%, #FF8A00 136.81%)",
        linearBg2:
          "linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%)",
        linearBg3:
          "linear-gradient(180deg, rgba(255, 206, 103, 0.22) -42.47%, rgba(253, 237, 202, 0) 100%)",
        linearBtnBg:
          "linear-gradient(97.86deg, #FFBA26 -8.95%, #FF9A0E 109.24%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
