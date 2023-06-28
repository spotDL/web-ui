export interface AppConfig {
  HOSTNAME: string;
  PORT: string;
  PROTOCOL: string;
  WS_PORT: string;
  WS_PROTOCOL: string;
}

export interface Settings {
  audio_providers: string[];
  lyrics_providers: string[];
}

export type Option<T> = T | null;
