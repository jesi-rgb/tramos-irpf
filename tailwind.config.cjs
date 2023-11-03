const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', '--system-ui', '--apple-system']
      }
    }
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: ['business']
  }
};

module.exports = config;
