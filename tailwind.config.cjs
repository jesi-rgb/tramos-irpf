const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['AT Name Sans Variable', 'SF Pro']
      }
    }
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: ['business']
  }
};

module.exports = config;
