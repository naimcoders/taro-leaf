/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#79B543",
        secondary: {
          light: "#F9FBF9",
          dark: "#165E38",
          DEFAULT: "#F9FBF9",
        },
        accent: "#9ED28A",
      },
    },
  },
  plugins: [],
};
