/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-primary": "#000066",
        "p-black": "#2A2E34",
        "p-secondary": "#4F5762",
      },
    },
  },
  plugins: [],
}