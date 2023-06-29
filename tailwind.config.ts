import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...fontFamily.sans]
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['forest', 'light', 'dark', 'cyberpunk', 'cupcake']
  }
} satisfies Config;
