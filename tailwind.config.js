/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluelight': '#8FB2F5',
        'gray900': '#13131A',
        'gray800': '#16161F',
        'gray700': '#1C1C27',
        'gray600': '#22222F',
        'gray500': '#3B3B54',
        'gray400': '#7F7F98',
        'gray300': '#ABABC4',
        'gray200': '#BFBFD4',
        'gray100': '#FAFAFA',
      },
    },
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

