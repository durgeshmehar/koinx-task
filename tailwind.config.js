/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.3': '0.1px',
        '0.5': '0.8px',
      },
    },
  },
  plugins: [],
}

