module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      'light',
      'dark',
      'forest',
      {
        'spotdl-dark': {
          // ...require('daisyui/src/colors/themes')['[data-theme=forest]'],
          primary: '#22d662', // spotdl green
          'primary-content': '#ffffff', // font color on primary
          secondary: '#ffffff', // unused?
          accent: '#ffffff', // unused
          neutral: '#4c4c4c', // navbar & footer
          'base-100': '#252525', // input & content bg
          'base-200': '#252525', // border & special content bg
          'base-300': '#121212', // background
          info: '#3ABFF8',
          success: '#22d662',
          warning: '#FBBD23',
          error: '#F87272',
          '--rounded-btn': '1.9rem',
        },
      },
      {
        'spotdl-light': {
          primary: '#22d662',
          'primary-content': '#ffffff',
          secondary: '#5d5d5d',
          accent: '#16ce57',
          neutral: '#4c4c4c',
          'base-100': '#ffffff',
          'base-200': '#ffffff',
          'base-300': '#ffffff',
          info: '#3ABFF8',
          success: '#22d662',
          warning: '#FBBD23',
          error: '#F87272',
          '--rounded-btn': '1.9rem',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
