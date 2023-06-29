import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const { version }: { version: string } = JSON.parse(
  fs.readFileSync(path.join(dirname, 'package.json'), 'utf-8')
);

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'SPOTDL_',
  plugins: [vue()],
  define: {
    __APP_VERSION__: `'${version}'`
  },
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
