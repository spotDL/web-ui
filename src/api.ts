import axios, { type AxiosInstance, type AxiosResponse, type AxiosStatic } from 'axios';

import type { Option } from '@app/types';
import { createURLFrom } from '$lib/utils/url';
import { netconfig } from '@app/config';

const { HOSTNAME, PORT, PROTOCOL, WS_PORT, WS_PROTOCOL } = netconfig;

const spotDLBaseURL = `${PROTOCOL}//${HOSTNAME}${PORT && ':' + PORT}`;
const wsBaseURL = `${WS_PROTOCOL}//${HOSTNAME}${WS_PORT && ':' + WS_PORT}`;

class SpotDLApi {
  protected api: AxiosInstance;

  constructor() {
    this.api = <AxiosStatic>axios.create({ baseURL: spotDLBaseURL });
  }

  getVersion = async (): Promise<string> => (await this.api.get('/api/version')).data;
}

class WSConnection {
  private socket: Option<WebSocket>;
  private connected: boolean;

  constructor() {
    this.socket = null;
    this.connected = false;
  }

  connect = (client_id: string) => {
    if (this.connected) {
      return;
    }

    console.time('Websocket connected');
    this.socket = new WebSocket(createURLFrom(`${wsBaseURL}/api/ws`, { params: { client_id } }));

    this.socket.onopen = (event: WebSocketEventMap['open']) => {
      console.timeLog('Websocket connected');
      this.connected = true;
    };

    this.socket.onclose = (event: WebSocketEventMap['close']) => {
      console.warn('Websocket connection closed');
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

export const socket = new WSConnection();
export const spotdl = new SpotDLApi();
