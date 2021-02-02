const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      neutral: {
        'blue-grayish': '#6E728E',
        'blue-grayish-dark': '#4A4D60',
        blue: '#6D72DE',
        'blue-light': '#F7F7FE',
      },
      gradient: {
        start: '#A2A7F0',
        end: '#696EDD',
      },
      white: '#FFF',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['.9375rem', 1.87],
        dollar: ['2.5rem', 1.225],
        button: ['.8125rem', 1.23],
        heading: ['2rem', 1.22],
      },
      boxShadow: {
        DEFAULT: '0px 20px 40px rgba(212, 210, 244, 0.5)',
      },
      borderRadius: {
        plan: '.625rem',
      },
      maxWidth: {
        container: '65.625rem',
      },
      gridTemplateColumns: {
        toggle: 'repeat(3, auto)',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus-visible'],
      textColor: ['focus-visible'],
      backgroundColor: ['focus-visible'],
      borderColor: ['focus-visible'],
    },
  },
}
