/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        condensed: ["var(--font-roboto-condensed)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        miller: ["Miller Text", "serif"],
      },
    },
  },
  plugins: [],
}; 