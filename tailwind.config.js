/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 全新的优雅配色方案
        primary: {
          50: '#fafafa',   // 近白色
          100: '#f5f5f5',  // 极浅灰
          200: '#e5e5e5',  // 浅灰
          300: '#d4d4d4',  // 中浅灰
          400: '#a3a3a3',  // 中灰
          500: '#737373',  // 深中灰
          600: '#525252',  // 深灰
          700: '#404040',  // 很深灰
          800: '#262626',  // 极深灰
          900: '#171717',  // 近黑色
          950: '#0a0a0a',  // 更深黑
        },
        // 黄绿色强调色系
        accent: {
          DEFAULT: 'rgba(216, 236, 43, 0.8)',  // 主强调色
          light: 'rgba(216, 236, 43, 0.6)',    // 浅色版本
          dark: 'rgba(180, 196, 36, 0.9)',     // 深色版本
          muted: 'rgba(216, 236, 43, 0.3)',    // 柔和版本
        },
        // 纯色定义
        pure: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(216, 236, 43, 0.5)',
        'glow-lg': '0 0 40px rgba(216, 236, 43, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(216, 236, 43, 0.2)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'soft': '0 4px 16px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'elegant-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        'accent-gradient': 'linear-gradient(135deg, rgba(216, 236, 43, 0.1) 0%, rgba(216, 236, 43, 0.05) 50%, rgba(216, 236, 43, 0.1) 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}