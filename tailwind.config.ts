import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...fontFamily.sans]
      }
    }
  },
  plugins: [daisyui, scrollbar],
  daisyui: {
    themes: ['light', 'dark', 'forest', 'cupcake', 'cyberpunk']
  }
} satisfies Config;
