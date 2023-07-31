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
        'main': "url('/main.jpg')",
        'graphs': "url('/graphs.png')",
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
