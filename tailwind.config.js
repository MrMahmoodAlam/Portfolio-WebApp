/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
     // ...
     'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
}

