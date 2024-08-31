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
      },
      backgroundColor:{
      'color1': '#0D0D0D',
      'color3': '#8C8C8C',
      'color4': '#262626',
      'color6': '#D9D9D9'
    },
    textColor: {
      'color2': '#8C8C8C',
      'color5': '#262626'
    }
  },
    plugins: [],
}