/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'none': '0',
        'blur': 'blur(20px)',
        'blur-lg': 'blur(40px)',
        'blur-md': 'blur(12px)',
        'blur-sm': 'blur(4px)',
        'blur-xs': 'blur(2px)',
      }
    },
    variants: {
      extend: {
        backdropBlur: ['responsive']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}