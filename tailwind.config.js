const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      neutral: {
        'blue-grayish': '#6E728E',
        'blue-grayish-dark': '#4A4D60',
        blue: '#6D72DE',
        'blue-light': '#D0D5F6',
        'blue-lightest': '#F7F7FE',
      },
      gradient: {
        start: '#A2A7F0',
        end: '#696EDD',
      },
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['.9375rem', 1.87],
      },
      boxShadow: {
        DEFAULT: '0px 20px 40px rgba(212, 210, 244, 0.5)',
      },
    },
  },
}

// ### Primary

// - Linear Gradient: hsl(236, 72%, 79%) to hsl(237, 63%, 64%)

// ### Neutral

// - Very Light Grayish Blue: hsl(240, 78%, 98%)
// - Light Grayish Blue: hsl(234, 14%, 74%)
// - Grayish Blue: hsl(233, 13%, 49%)
