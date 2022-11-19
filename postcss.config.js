const tailwindcss = require('tailwindcss');
const twForms = require('@tailwindcss/forms');
module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss,
    twForms,
  ],
};