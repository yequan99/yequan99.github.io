/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#ffd5bc',
        'maroon': '#f08080',
        'navy': '#19192C',
      }
    },
    fontFamily: {
      'pathway': ['Pathway Extreme', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
