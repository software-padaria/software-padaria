/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      width:{
        'duzz': '200px'
      },
      height:{
        "10vh": "10vh"
      }
    },
  },
  plugins: [],
}

