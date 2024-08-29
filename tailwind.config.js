/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
],
  theme: {
    extend: {backgroundColor: {
      'color1': '#0D0D0D',
      'color3': '#8C8C8C',
      'color4': '#262626'
    },
    textColor: {
      'color2': '#8C8C8C'
    }
  },
  },
  plugins: [],
}

