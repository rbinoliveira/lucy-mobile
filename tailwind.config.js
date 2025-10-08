/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        border: '#D1D5DB',
        'border-two': '#BFDBFE',
        primary: '#3B82F6',
        'text-one': '#1F2937',
        'text-two': '#ADAEBC',
        'text-three': '#4B5563',
        'text-four': '#DBEAFE',
        'text-five': '#6B7280',
        'text-six': '#374151',
        'primary-light': '#EFF6FF',
      },
      fontFamily: {
        inter: 'Inter_Regular',
        'inter-medium': 'Inter_Medium',
        'inter-bold': 'Inter_Bold',
        'inter-semibold': 'Inter_SemiBold',
      },
    },
  },
  plugins: [],
}
