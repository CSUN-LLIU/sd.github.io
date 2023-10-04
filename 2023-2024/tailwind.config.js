/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme.config.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "csun-red": "#d22030",
      },
    },
  },
  plugins: [],
};
