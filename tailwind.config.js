/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-1': "url('/main.jpg')",
        'main-2': "url('/bg-2.png')",
        'main-3': "url('/bg-3.png')",
        'graphs': "url('/graphs.png')",
        'feedback': "url('/feedback.png')",
      },
      colors: {
        white: '#F5F5F5',
        gold: '#CCBC67',
        bgblack: '#222221',
        light_gold: '#E5DEBB',
        gray: '#525252',
        quote: '#B5B5B5',
      },
      fontFamily: {
        Acrom_light: 'Acrom_light',
        Acrom_regular: 'Acrom_regular',
        Acrom_bold: 'Acrom_bold'
      }
    },
  },
  plugins: [],
}
