/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        PrimaryDark: "#882C51",
        secondary: "#21D489",
        dark: "#303030",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container: {
        center:true,
        paddind:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
};

