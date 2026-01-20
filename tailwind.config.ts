import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#dbe9ff',
          200: '#b8d4ff',
          300: '#8bb6ff',
          400: '#5c90ff',
          500: '#2f6aff',
          600: '#2051d6',
          700: '#1b43ad',
          800: '#1a3a87',
          900: '#183269'
        },
        accent: '#ffb020'
      }
    }
  },
  plugins: []
};

export default config;
