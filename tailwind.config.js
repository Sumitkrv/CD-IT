/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          text: '#0F172A',
          textSecondary: '#475569',
          accent: '#1E40AF',
          accentHover: '#1E3A8A',
        },
        dark: {
          bg: '#0B0F1A',
          surface: '#0F172A',
          text: '#F1F5F9',
          textSecondary: '#94A3B8',
          accent: '#60A5FA',
          accentHover: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
