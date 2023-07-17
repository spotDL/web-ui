import { writable } from 'svelte/store';
import { useLocalStorage } from '$lib/utils/local-storage';
import { LocalKeys } from '@app/constants';

export const CLIENT_ID = writable<string>('');

export const THEME = writable<string>(useLocalStorage('get', LocalKeys.THEME) ?? 'forest');

export const SEARCH_QUERY = writable<string>('');

export const SEARCH_FILTER = writable<string>(
  useLocalStorage('get', LocalKeys.SEARCH_FILTER) ?? 'all'
);
