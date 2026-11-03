/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FDF8F6',
          petal: '#F7D7E0',
          mauve: '#D4A7B8',
          nude: '#E8C6C9',
          champagne: '#E7D7C8',
          deep: '#9B4A65',
          wine: '#4A2531',
          dark: '#301820',
          card: '#FFFBF9',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        allura: ['"Allura"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(155, 74, 101, 0.1)',
        'glow': '0 0 25px rgba(247, 215, 224, 0.6)',
        'luxury': '0 20px 40px -15px rgba(74, 37, 49, 0.08)',
      }
    },
  },
  plugins: [],
}

