/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        open: {
          "0%": {
            transform: 'scaleY(0)',
          },
          "100%": {
            transform: 'scaleY(1)',
          }
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
        'open-menu': 'open 0.25s',
        typewriter: "typing 2s steps(18), cursor .7s infinite",
        'text-slide-4': 'typing 2s linear alternate infinite, text-slide-4 16s steps(1) infinite', // 16s for text-slide-4 because 2s * 2 (alternate animation)
      }
    },
  },
  plugins: [],
}

