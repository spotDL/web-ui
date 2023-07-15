import { writable } from 'svelte/store';
import { useLocalStorage } from '$lib/utils/local-storage';
import { LocalKeys } from '@app/constants';

export const client_id = writable<string>('');

export const theme = writable<string>(useLocalStorage('get', LocalKeys.THEME) ?? 'forest');
