/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly SPOTDL_HOSTNAME: string;
  readonly SPOTDL_PORT: string;
  readonly SPOTDL_PROTOCOL: string;
  readonly SPOTDL_WS_PORT: string;
  readonly SPOTDL_WS_PROTOCOL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
