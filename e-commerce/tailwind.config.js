/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alliance: ["Alliance", "sans-serif"], // Replace 'Alliance No.2 Regular' with your font-family name
      },
      colors: {
        customGray: "rgb(28, 30, 32)",
      },
    },
  },
  plugins: [],
};
