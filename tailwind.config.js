/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'hoves-light': "Hoves Light",
        'hoves-regular': 'Hoves Regular',
        'hoves-extra-light': 'Hoves ExtraLight',
        'hoves-extended-extralight': 'Hoves Extended ExtraLight',
        'hoves-condensed-extralight': 'Hoves Condensed ExtraLight'
      }
    }
  },
  plugins: [],
};
