/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js",],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}