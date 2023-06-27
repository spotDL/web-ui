import { createApp, type App as VueApp } from 'vue';

import '@app/main.css';

import App from '@app/App.vue';

const main = () => {
  const app: VueApp<Element> = createApp(App);

  app.mount('#app');
};

main();
