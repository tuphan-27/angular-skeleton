/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
      }
    }
  },
  plugins: {
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
