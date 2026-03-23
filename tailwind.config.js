/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          deep:    '#2c2416',
          DEFAULT: '#3d3120',
          light:   '#5a4a30',
        },
        amber: {
          DEFAULT: '#c17f3a',
          light:   '#d4954f',
          pale:    '#f5e6d0',
        },
        cream: '#faf6ef',
        warm:  '#fff9f2',
        muted: '#8a7a65',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
