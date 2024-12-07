/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-pulse': {
          '0%': {
            borderTopColor: '#003366',    // Dark Blue
            borderLeftColor: '#003366',   // Dark Blue
            borderBottomColor: '#003366',
            borderRightColor: '#003366',  // Dark Blue
          },
          '50%': {
            borderTopColor: '#006400',    // Dark Green
            borderLeftColor: '#006400',   // Dark Green
            borderBottomColor: '#006400',
            borderRightColor: '#006400',  // Dark Green
          },
          '100%': {
            borderTopColor: '#003366',    // Dark Blue
            borderLeftColor: '#003366',   // Dark Blue
            borderBottomColor: '#003366',
            borderRightColor: '#003366',  // Dark Blue
          },
        },
      },
      animation: {
        'border-pulse': 'border-pulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
}
