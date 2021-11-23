module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}', './partials/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'blue': '#3F80FF',
      'black': '#0F0F0F',
      'white': "#FFFFFF"
    },
    fontSize: {
      'xl': '40px',
      'lg': '30px',
      'md': '20px',
      'sm': '15px',
      'xs': '12px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
