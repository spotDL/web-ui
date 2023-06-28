import axios, { type AxiosInstance, type AxiosResponse, type AxiosStatic } from 'axios';

import config from '@app/config';
import { createURL } from '@app/utils/urls';
import type { Option, Settings as ISettings } from '@app/types';

const { HOSTNAME, PORT, PROTOCOL, WS_PORT, WS_PROTOCOL } = config;

const baseURL = `${PROTOCOL}//${HOSTNAME}:${PORT}`;
const wsBaseURL = `${WS_PROTOCOL}//${HOSTNAME}${WS_PORT && ':' + WS_PORT}`;

const API: AxiosInstance = <AxiosStatic>axios.create({ baseURL });

class Api {
  protected api: AxiosInstance;
  constructor() {
    this.api = API;
  }
}

class Song extends Api {
  search = async (query: string): Promise<AxiosResponse<any, any>> =>
    await this.api.get('/api/songs/search', { params: { query } });

  download = async (url: string, client_id: string): Promise<void> => {
    <AxiosResponse<any, any>>await this.api
      .post('/api/download/url', null, {
        params: { url, client_id }
      })
      .then(async ({ data, headers }) => {
        const filename = (<string>data).split('\\').pop() || '';
        const blob = new Blob([data], { type: headers['Content-Type'] as string });

        const url = URL.createObjectURL(blob);
        const a = <HTMLAnchorElement>document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      });
  };

  protected downloadFile = async (file: string, client_id: string): Promise<string> =>
    (await this.api.get('/api/download/file', { params: { file, client_id } })).data as string;
}

class Settings extends Api {
  get = async <T = any, D = any>(client_id: string): Promise<AxiosResponse<T, D>> =>
    await this.api.get('/api/settings', { params: { client_id } });

  set = async <T = any, D = any>(
    settings: ISettings,
    client_id: string
  ): Promise<AxiosResponse<T, D>> =>
    this.api.post('/api/settings/update', settings, { params: { client_id } });
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
