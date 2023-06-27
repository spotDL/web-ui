import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useAppStore = defineStore('store', {
  state: () => {
    return {
      client_id: '' as string
    };
  }
});
