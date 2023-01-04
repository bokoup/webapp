/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'logo': ['Poppins'
        ],
        'heading': ['Rubik'
        ],
        'sans': ['Nunito', ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        bokoupGreen: {
          100: "#ccfaf2ff",
          200: "#99f5e5ff",
          300: "#66efd8ff",
          400: "#33eacbff",
          500: "#00e5beff"
        },
        bokoupGreen2: {
          '50': '#e0fcf7',
          '100': '#b3f7ec',
          '200': '#80f2df',
          '300': '#4dedd2',
          '400': '#26e9c8',
          '500': '#00e5be',
          '600': '#00e2b8',
          '700': '#00deaf',
          '800': '#00daa7',
          '900': '#00d399',
          'A100': '#fbfffe',
          'A200': '#c8ffee',
          'A400': '#95ffde',
          'A700': '#7bffd6',
        },
        bokoupBlue: {
          100: "#d6efffff",
          200: "#addfffff",
          300: "#85cffeff",
          400: "#5cbffeff",
          500: "#33affeff"
        },
        bokoupBlue2: {
          '50': '#e7f5ff',
          '100': '#c2e7ff',
          '200': '#99d7ff',
          '300': '#70c7fe',
          '400': '#52bbfe',
          '500': '#33affe',
          '600': '#2ea8fe',
          '700': '#279ffe',
          '800': '#2096fe',
          '900': '#1486fd',
          'A100': '#ffffff',
          'A200': '#f9fcff',
          'A400': '#c6e0ff',
          'A700': '#add2ff',
        },
        bokoupBlueGreen: {
          200: "#0dd8ceff",
          300: "#1acadeff",
          400: "#26bdeeff",
        },
        bokoupDark: {
          100: "#cdd3d6ff",
          200: "#9ba7acff",
          300: "#6a7b83ff",
          400: "#384f59ff",
          500: "#062330ff"
        },
        bokoupDark2: {
          '50': '#e1e5e6',
          '100': '#b4bdc1',
          '200': '#839198',
          '300': '#51656e',
          '400': '#2b444f',
          '500': '#062330',
          '600': '#051f2b',
          '700': '#041a24',
          '800': '#03151e',
          '900': '#020c13',
          'A100': '#54a0ff',
          'A200': '#2184ff',
          'A400': '#0069ed',
          'A700': '#005ed4',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
