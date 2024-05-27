/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: '1052px'
    },
    extend: {
      colors: {
        'soluct-dark-blue': '#001F3E',
        'soluct-light-blue': '#2eabc5'
      }
    }
  },
  plugins: []
}
