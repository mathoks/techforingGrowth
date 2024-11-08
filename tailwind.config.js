/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

      screens: {
      'xs': '320px',
      'ls': '425px',
      'sp' : '375px'
    },
      colors: {
        'primary': '#5BBC2E',
        'blue':'#256CBC',
        'dark-text-2': '#333',
        'dark-text-3': '#494949',
        'cold-grey-30': '#B1B5BB',
        'cardBG': '#f0f0f0',
        'lightBlack': '#666666',
        'lineColor': '#E3E8F0',
        'secondary-1': '#182F59',
        'LG-1': 'conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)',
        'LG-2': 'conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(91, 188, 46, 0.25) 0%, rgba(91, 188, 46, 0.25) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)',
        'LG-3': 'conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(91, 188, 46, 0.25) 0%, rgba(91, 188, 46, 0.25) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)',
        'indigo': "#182F59",
        'green': "#5BBC2E",
        'light-white': "#EAEAEA",
        'light-white2': "#FAFAFA",
        'light-gray': "#494949"
      },
      boxShadow: {
        'shadow1x': '0px 10px 25px rgba(0,0,0,0.18)',
        'shadow1.5x': "8px 8px 16px rgba(0,0,0,0.12)",
        'shadow2x': '10px 10px 20px rgba(0,0,0,0.25)',
        'shadow0.5x': '4px 4px 8px rgba(0,0,0,0.12)',
        "shadow3x": '-20px -15px 50px rgba(255,255,255,0.55)',
        "shadow4x": "10px 10px 30px rgba(0,0,0,0.3)",
        "shadow2.5x": "-5px 5px 20px rgba(0,0,0,0.15)",
        "shadow3.5x": "10px 10px 20px rgba(0,0,0,0.18)",
        "shadow4.5x": "0px 6px 16px rgba(0,0,0,0.20)",
        "shadow5x": "12px 5px 20px rgba(0,0,0,0.15)",
        "shadow5.5x": "20px 15px 30px rgba(0,0,0,0.25)",
        "shadow6x": " 5px 5px 15px rgba(0,0,0,0.18)",
        "shadow6.5x": "0px 2px 8px rgba(0,0,0,0.15)",
        "shadow7x": "6px 10px 18px 0px rgba(35, 61, 104, 0.20)",
        "shadow7.5x": "2.72727px 4.09091px 8.18182px 0px rgba(24, 47, 89, 0.25);",
        "shadow8x": "0px 0px 20px rgba(0,0,0,0.5)",
        "iconShadow": "0px 0px 14px 1.5px rgba(0,0,0,0.2)",
        'greenDrop': '0px 4px 4px 0px rgba(91, 188, 46, 0.25)',
      },
      keyframes:{
        blinkShadow: {
          '0%': { boxShadow: '0 0 0 0 rgba(220, 53, 69, 1)' },
          '100%': { boxShadow: '0 0 0 4px rgba(24, 47, 89, 0)' }
        },
        blinkShadowSlowly: {
          '0%': { boxShadow: '0 0 0 0 rgba(220, 53, 69, 1)' },
          // '50%': { boxShadow: '0 0 0 2px rgba(10, 40, 80, 0.70)' },
          '100%': { boxShadow: '0 0 0 2px rgba(24, 47, 89, 0)' }
        },
      },
      animation:{
        blinkShadowSlowly: 'blinkShadowSlowly 1.5s infinite',
        blinkShadow: 'blinkShadow 1.2s infinite',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
