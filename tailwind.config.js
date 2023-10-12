/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      body: 'Inter',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
    
      },
     colors: {
        primary: "#002B4C",
        ss: {
          500: "#002B4C",
        },
        "ss-blue": {
          50: "#D1EBFF",
          100: "#A8D9FF",
          200: "#52B4FF",
          300: "#008EFA",
          400: "#005CA3",
          500: "#002B4C",
          600: "#00233D",
          700: "#001A2E",
          800: "#00111F",
          900: "#00090F",
          950: "#000305",
        },
        "ss-red": {
          50: "#FFE0E4",
          100: "#FFBDC4",
          200: "#FF808E",
          300: "#FF3D54",
          400: "#FF001E",
          500: "#BD0015",
          600: "#990012",
          700: "#70000D",
          800: "#4D0009",
          900: "#240004",
          950: "#140002",
        },
        "ss-gray": {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#DEDDDD",
          400: "#D2D0D0",
          500: "#C7C5C5",
          600: "#A09C9C",
          700: "#7A7676",
          800: "#504E4E",
          900: "#2A2828",
          950: "#151414"
        },
      },
    },
  },
  plugins: [],
};
