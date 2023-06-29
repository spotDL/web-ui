import { defineStore } from 'pinia';
import { useLocalStorage } from '@app/composables/useLocalStorage';
import { LocalKeys } from '@app/constants';

export const useAppStore = defineStore('store', {
  state: () => {
    return {
      client_id: <string>'',
      theme: <string>useLocalStorage('get', LocalKeys.THEME) ?? 'forest'
    };
  }
});
