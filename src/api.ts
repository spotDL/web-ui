import axios, { type AxiosInstance, type AxiosResponse, type AxiosStatic } from 'axios';

import config from '@app/config';
import { createURL } from '@app/utils/urls';
import type { Option } from '@app/types';

const { HOSTNAME, PORT, PROTOCOL, WS_PORT, WS_PROTOCOL } = config;

const baseURL = `${PROTOCOL}//${HOSTNAME}:${PORT}`;
const wsBaseURL = `${WS_PROTOCOL}//${HOSTNAME}${WS_PORT && ':' + WS_PORT}`;

const API: AxiosInstance = <AxiosStatic>axios.create({ baseURL });

class Api {
  protected api: AxiosInstance;
  constructor() {
    this.api = <AxiosStatic>axios.create({ baseURL });
  }
}

class Song extends Api {
  search = async (query: string): Promise<AxiosResponse<any, any>> =>
    await this.api.get('/api/songs/search', { params: { query } });

  download = async (url: string, client_id: string): Promise<AxiosResponse<any, any>> =>
    await this.api.post('/api/download/url', null, { params: { url, client_id } });
}

class Settings extends Api {
  getSettings = async (client_id: string) =>
    await this.api.get('/api/settings', { params: { client_id } });
}

class WSConnection {
  private socket: Option<WebSocket>;
  private connected: boolean;

  constructor() {
    this.socket = null;
    this.connected = false;
  }

  connect = (client_id: string): void => {
    if (this.connected) {
      return;
    }

    console.time('WebSocket Connected');
    this.socket = new WebSocket(createURL(`${wsBaseURL}/api/ws`, { params: { client_id } }));

    this.socket.onopen = (event: WebSocketEventMap['open']) => {
      console.timeLog('WebSocket Connected'); // Log the connection time in console.
      this.connected = true;
    };

    this.socket.onclose = (event: WebSocketEventMap['close']) => {
      console.warn('WebSocket Closed');
      this.connected = false;
    };
  };

  onMessage = (fn: (event: WebSocketEventMap['message']) => any) => {
    if (this.socket) this.socket.onmessage = fn;
  };

  onError = (fn: (event: WebSocketEventMap['error']) => any) => {
    if (this.socket) this.socket.onerror = fn;
  };
}

export const SongApi = new Song();
export const SettingsApi = new Settings();
export const WSConnectionApi = new WSConnection();
