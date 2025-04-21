/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'unc-blue': '#4B9CD3',
        'unc-navy': '#13274F',
        'unc-light-blue': '#E3F2FD',
        'unc-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'float-1': 'float-y 8s ease-in-out infinite, float-x 12s ease-in-out infinite',
        'float-2': 'float-y 8s ease-in-out infinite -2.5s, float-x 12s ease-in-out infinite -4s',
        'float-3': 'float-y 8s ease-in-out infinite -5s, float-x 12s ease-in-out infinite -8s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '33%': { transform: 'translateY(-10px)' },
          '66%': { transform: 'translateY(8px)' },
        },
        'float-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '33%': { transform: 'translateX(-8px)' },
          '66%': { transform: 'translateX(8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'wave': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '20px 20px',
        'gradient-dots': '20px 20px',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 15px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px 2px rgba(75, 156, 211, 0.3)',
        'glow-lg': '0 0 30px 5px rgba(75, 156, 211, 0.4)',
      },
    },
  },
  plugins: [],
} 