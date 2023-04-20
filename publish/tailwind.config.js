/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary_white: "#f8f8f8",
        base_accent: "#573ad8",
        base_dark: "#2e2e2e",
        secondary_dark: "#171717",
      },
    },
  },
  plugins: [],
};
