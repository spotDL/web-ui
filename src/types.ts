export interface NetworkConfig {
  HOSTNAME: string;
  PORT: string;
  PROTOCOL: string;
  WS_PORT: string;
  WS_PROTOCOL: string;
}

export type Option<T> = T | null;
