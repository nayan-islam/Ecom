/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans - serif"],
    },
    extend: {
      colors: {
        primery: "#17444a",
        hover: "#0e2d31",
      },
    },
  },
  plugins: [],
};
