module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')// Include the forms plugin
  ],
};