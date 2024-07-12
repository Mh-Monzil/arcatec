/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "primaryBlack": "#050505",
        "primaryWhite": "#F5F5F5",
        "yellowGreen": "#C6F906",
        "ash": "#959595",
      },
      boxShadow: {
        'shadowSmall': '0px 3px 12px 0px rgba(5, 5, 5, 0.04)',
      },
    },
    keyframes: {
      textRotation: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'text-rotate': 'textRotation 12s linear infinite',
    },
  },
  plugins: [],
}

