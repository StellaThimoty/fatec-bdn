/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	fontFamily: {
  		lemonmilk: ['LemonMilk']
  	},
  	colors: {
  		navbarGray: '#D9D9D9',
  		textPurple: '#890CD2',
  		backgroundPurple: '#270043',
  		transparent: 'transparent',
  		current: 'currentColor',
  		slate: 'colors.slate',
  		gray: 'colors.gray',
  		zinc: 'colors.zinc',
  		neutral: 'colors.neutral',
  		white: colors.white,
  		black: 'colors.black',
  		stone: 'colors.stone',
  		red: 'colors.red',
  		orange: 'colors.orange',
  		amber: 'colors.amber',
  		yellow: 'colors.yellow',
  		lime: 'colors.lime',
  		green: 'colors.green',
  		emerald: 'colors.emerald',
  		teal: 'colors.teal',
  		cyan: 'colors.cyan',
  		sky: 'colors.sky',
  		blue: 'colors.blue',
  		indigo: 'colors.indigo',
  		violet: 'colors.violet',
  		purple: 'colors.purple',
  		fuchsia: 'colors.fuchsia',
  		pink: 'colors.pink',
  		rose: 'colors.rose'
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

