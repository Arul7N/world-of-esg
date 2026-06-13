/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1D6B43',
        emerald: '#2FA66A',
        sage: '#9BC7A4',
        mint: '#DDF5E5',
        sand: '#F8F6F0',
        stone: '#E7E2D8',
        mist: '#F5F7F6',
        aurora: '#5BE38B',
        gold: '#CBBE8A',
        sky: '#A9BCF5',
        charcoal: '#243128',
        graphite: '#465348',
        deep: '#0B2A1E',
        ocean: '#117C50',
        violet: '#7430A4',
        indigo: '#3A4DB8',
        lavender: '#EDE9F7'
      },
      fontFamily: {
        'display': ['Inter Tight', 'sans-serif'],
        'serif-q': ['Instrument Serif', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'ecoSpin': 'ecoSpin 42s linear infinite',
        'bloomSpin': 'bloomSpin 55s linear infinite',
        'ecoPulse': 'ecoPulse 4.5s ease-in-out infinite',
        'ecoFlow': 'ecoFlow 2.4s linear infinite',
        'ecoBob': 'ecoBob 5s ease-in-out infinite',
        'ecoFloat': 'ecoFloat 6s ease-in-out infinite',
        'pulseDot': 'pulseDot 1.8s ease-in-out infinite',
        'dashFlow': 'dashFlow 2s linear infinite',
        'livePing': 'livePing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fadeUp': 'fadeUp 0.6s ease-out',
        'visBlink': 'visBlink 5s ease-in-out infinite',
        'visLook': 'visLook 5s ease-in-out infinite',
        'misTravel': 'misTravel 2.6s ease-in-out infinite alternate',
        'misFlow': 'misFlow 1.6s linear infinite',
        'dotIn': 'dotIn 0.5s forwards',
        'modIn': 'modIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'ringIn': 'ringIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marq': 'marq 38s linear infinite'
      },
      keyframes: {
        ecoSpin: {
          'to': { transform: 'rotate(360deg)' }
        },
        bloomSpin: {
          'to': { transform: 'rotate(360deg)' }
        },
        ecoPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.14)' }
        },
        ecoFlow: {
          'to': { strokeDashoffset: '-40' }
        },
        ecoBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        ecoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' }
        },
        dashFlow: {
          'to': { strokeDashoffset: '-24' }
        },
        livePing: {
          'from': { transform: 'scale(1)', opacity: '0.5' },
          'to': { transform: 'scale(2.8)', opacity: '0' }
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(12px)' },
          'to': { opacity: '1', transform: 'none' }
        },
        visBlink: {
          '0%, 86%, 100%': { transform: 'scaleY(1)' },
          '90%': { transform: 'scaleY(0.08)' },
          '94%': { transform: 'scaleY(1)' }
        },
        visLook: {
          '0%, 22%': { transform: 'translateX(0)' },
          '36%, 50%': { transform: 'translateX(-4px)' },
          '64%, 80%': { transform: 'translateX(4px)' },
          '100%': { transform: 'translateX(0)' }
        },
        misTravel: {
          'from': { offsetDistance: '0%' },
          'to': { offsetDistance: '100%' }
        },
        misFlow: {
          'to': { strokeDashoffset: '-30' }
        },
        dotIn: {
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        modIn: {
          'to': { opacity: '1', transform: 'none' }
        },
        ringIn: {
          'to': { opacity: '1', transform: 'none' }
        },
        marq: {
          'to': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}