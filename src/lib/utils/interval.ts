import { onDestroy, onMount } from 'svelte';

export const useInterval = (callback: Function, duration: number) => {
  let interval: number;

  onMount(() => {
    interval = setInterval(callback, duration);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
};
