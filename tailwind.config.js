/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './desarrollosIntegrales/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { 
      colors: {
        navbar: 'rgba(0, 0, 0, 0.2)',
        navbarClear: 'rgba(255, 255, 255, 1)',
        menu: 'rgba(0, 0, 0, 0.3)',
        menuList: 'rgba(0, 0, 0, 15%)',
        blackTheme: '#202020',
        fontBlackTheme: '#ffffff',
        fontBlackThemeButton: '#000000',
        fontClearTheme: '#000000',
        fontClearThemeButton: '#ffffff',
        'section-microsite': "rgba(255, 255, 255, 1)",
        'themeDark-microsite': '#4D4D4D',
        'themeClear-microsite': '#E6E6E6',
        'modalBorder': "rgb(204, 204, 204)"
      },
      fontFamily: {
        Raleway: 'Raleway',
        Alumni: 'Alumni Sans Pinstripe',
        Quicksand: 'Quicksand',
      },
      width: {
        197: '197px',
        425: '425px',
        586: '586px',
        603: '603px',
        '50/1': '50%',
      },
      height: {
        50: '50px',
        425: '425px',
        800: '800px',
        '25/1': '25%',
      },
      padding: {
        '0_40': '0px 40px',
        optionMenu: '12px 10px 10px 12px',
        socialMenu: '12px 10px 10px 10px',
      },
      inset: {
        15: '15px',
        20: '20px',
        30: '30px',
        77: '77px',
        '10/1': '10%',
      },
      backgroundImage: {
        'main-section': "url('/images/home.jpeg')",
        'information-image1': "url('/images/information.png')",
        'information-image2': "url('/images/information2.png')",
        'creativo-AHAU': "url('/images/AHAU.png')",
        'creativo-CEIBA': "url('/images/CEIBA.png')",
        'creativo-natt': "url('/images/NaatYaab.png')",
        //Se agregro
        'creativo-F4sf': "url('/images/F4sf.jpg')",
        'creativo-ondas': "url('/images/ondas.png')",
        'backgroundDark' : 'linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(47, 47, 47, 1) 25%, rgba(61, 61, 61, 1) 50%,rgba(47, 47, 47, 1) 75%,rgba(0, 0, 0, 1) 100%)',
      },
      keyframes: {
        modal: {
          'from': { top: '-500px' },
          'to': { top: '100px' },
        },
      },
      animation: {
        'modal': 'modal 1s linear',
      }
    },
  },
  plugins: [],
}
