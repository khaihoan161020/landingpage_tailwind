/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-orange-red': 'linear-gradient(90deg, rgba(251,81,94,1) 0%, rgba(251,105,79,1) 100%)',
                'gradient-blue': 'linear-gradient(320deg, rgba(91,59,255,1) 23%, rgba(46,202,240,1) 100%)'
            },
			screens: {
				'3xl': '1920px'
			},
			colors: {
				'bold-blue': '#161e6d',
				'sub-gray': '#52585b',
				'blur-blue': '#f5f8ff'
			},
			keyframes: {
				ripple: {
					'0%': { opacity: 0, transform: 'scale(0)' },
					'100%': { opacity: 1, transform: 'scale(2)' }
				},
				fade2Right: {
					'from': {
						opacity: 0,
						transform: 'translateX(-400px)'
					},
					'to%': {
						opacity: 1,
						transform: 'translateX(0px)'
					},
				}
			},
			animation: {
				ripple: 'ripple 0.3s linear infinite',
				fadeIn2Right: 'fade2Right 0.3s ease-in-out'
			}
        },
    },
    plugins: []
}
