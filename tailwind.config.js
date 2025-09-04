/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        border: '#D1D5DB',
        primary: '#3B82F6',
      },
      fontFamily: {
        inter: [
          'Inter_Regular',
          'Inter_Medium',
          'Inter_SemiBold',
          'Inter_Bold',
        ],
      },
    },
  },
  plugins: [],
}
