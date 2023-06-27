import { createApp, type App as VueApp } from 'vue';
import { createPinia, type Pinia } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import '@app/main.css';

import App from '@app/App.vue';
import * as devtools from '@app/utils/devtools';

const main = () => {
  const app: VueApp<Element> = createApp(App);
  const pinia: Pinia = createPinia();

  if (import.meta.env.DEV) devtools.init();

  app.use(pinia);

  app.mount('#app');
};

main();
