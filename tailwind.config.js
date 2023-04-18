/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: '100% 50%'
          }
        }
      },
      animation: {
        gradientShift: 'gradient 5s ease infinite'
      }
    },
  },
  plugins: [],
}
