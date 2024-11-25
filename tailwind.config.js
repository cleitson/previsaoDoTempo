/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Nunito Sans"', 'sans-serif'],
      'serif': ['"Merriweather"', 'serif'],
      'mono': ['"Fira Code"'],
    },
    backgroundImage: {
      'imagebackground': "url('../public/Background.svg')",
    },
  },
  plugins: [],
}

