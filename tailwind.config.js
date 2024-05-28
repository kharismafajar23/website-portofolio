/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        kuning: 'rgba(255, 209, 88, 1)',
        kuning1: 'rgba(237, 205, 17, 1)',
        kuning2: 'rgba(245, 176, 24, 1)',
        gray: 'rgba(97, 110, 124, 1)',
        gray_bg: 'rgba(240, 242, 245, 1)',
        black2: 'rgba(38, 44, 48, 1)',
        header_bg: 'rgba(255, 255, 255, 0.7)',
        modal_bg: 'rgba(0, 0, 0, 0.46)',
      },
      fontFamily: {
        main: ["'Outfit', sans-serif"],
        secondary: ["'Plus Jakarta Sans', sans-serif"],
      },
    },
  },
  plugins: [],
};
