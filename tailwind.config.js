/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    minHeight: {
      "h": "400px",
      "screen": "980px",
      "banner": "250px"
    },
    maxWidth: {
      '95': '95%',
      "max-width": "1500px"
    },
  
    extend: {},
  },
  plugins: [],
}

