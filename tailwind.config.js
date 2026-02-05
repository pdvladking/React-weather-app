// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
          '50%': { transform: 'translateY(-5px)', opacity: 1 },
        },
        drip: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(10px)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        drip: 'drip 1s linear infinite',
      },
    },
  },
  plugins: [],
};