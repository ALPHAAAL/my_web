import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        open: {
          "0%": {
            transform: 'scaleY(0)',
          },
          "100%": {
            transform: 'scaleY(1)',
          }
        },
        'fill': {
          "0%": {
            opacity: '0%',
          },
          "100%": {
            opacity: '100%',
          }
        },
        "open-corner": {
          "0%": {
            clipPath: 'circle(0% at 100% 0%)',
          },
          "100%": {
            clipPath: 'circle(100%)',
          }
        },
        "close-corner": {
          "0%": {
            clipPath: 'circle(100%)',
          },
          "100%": {
            clipPath: 'circle(0% at 100% 0%)',
          },
        },
        typing: {
          "0%": {
            width: "0%",
          },
          "90%": {
            width: "100%",
          },
          "100%": {
            width: "110%",
          }
        },
        cursor: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        'text-slide-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-20%)',
          },
          '50%, 70%': {
            transform: 'translateY(-40%)',
          },
          '75%, 95%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(-80%)',
          },
        },
      },
      animation: {
        'text-fill': 'fill 1.5s linear',
        'open-menu': 'open 0.25s',
        'open-menu-corner': 'open-corner 0.5s',
        'close-menu-corner': 'close-corner 0.5s',
        typewriter: "typing 2s steps(18), cursor .7s infinite",
        'text-slide-4': 'typing 2s linear alternate infinite, text-slide-4 16s steps(1) infinite', // 16s for text-slide-4 because 2s * 2 (alternate animation)
      }
    },
  },
  plugins: [
    typography,
  ],
}

