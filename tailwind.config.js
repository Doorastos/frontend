/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfProDisplay: ['var(--font-sfProDisplay)'],
        robodron: ['var(--font-robodron)'],
      },
      colors: {
        'white': '#FEFEFE',
        'black': '#010101',
        'bg': '#FAFAFA',
        'grey1': '#222222',
        'grey2': '#727272',
        'grey3': '#F2F2F2',
        'grey4': '#C7C7C7',
        'blue1': '#0222A5',
        'blue2': '#00197E',
        'line': '#E6E6E6',
        'red': '#D62D30',
      },
      boxShadow: {
        'common': '0px 4px 30px 9px rgba(2, 34, 165, 0.05)',
      },
      screens: {
        'maxw': '1200px',
        'esm': '480px',
        'smlg': '900px',
      },
    },
  },
  plugins: [],
}

