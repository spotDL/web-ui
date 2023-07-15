import { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui, scrollbar]
} satisfies Config;

