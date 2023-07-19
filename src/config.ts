import type { NetworkConfig } from '@app/types';

export const netconfig = {
  HOSTNAME: import.meta.env.SPOTDL_HOSTNAME || window.location.hostname,
  PORT: import.meta.env.SPOTDL_PORT || window.location.port,
  PROTOCOL: import.meta.env.SPOTDL_PROTOCOL || window.location.protocol,
  WS_PORT: import.meta.env.SPOTDL_WS_PORT || window.location.port,
  WS_PROTOCOL:
    import.meta.env.SPOTDL_WS_PROTOCOL || (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
} satisfies NetworkConfig;
