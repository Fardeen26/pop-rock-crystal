/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        googleSans: ['googleSans', 'sans-serif'],
        googleSansLight: ['googleSansLight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

