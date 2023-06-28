import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
} satisfies Config;
