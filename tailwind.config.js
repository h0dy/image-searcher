/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    animation: {
      "spin-fast": "spin 0.5s linear infinite",
    },
    fontFamily: {
      sans: ["Roboto Mono", "sans serif"],
    },
  },
  plugins: [],
};
