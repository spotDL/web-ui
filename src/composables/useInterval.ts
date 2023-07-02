import { getCurrentScope, onScopeDispose } from 'vue';

/**
 * Executes the given callback function repeatedly with a fixed time delay between each execution.
 * The interval is automatically cleared when the Vue component's scope is disposed.
 *
 * @param {Function} callback - The function to be executed at each interval.
 * @param {number} duration - The time delay (in milliseconds) between each execution of the callback.
 * @returns {Function} - A cleanup function that clears the interval when called.
 */
export const useInterval = (callback: Function, duration: number): Function => {
  /**
   * The interval ID returned by setInterval.
   * @type {number}
   */
  const interval: number = setInterval(callback, duration);

  if (getCurrentScope()) {
    /**
     * Function to clear the interval when the Vue component's scope is disposed.
     */
    onScopeDispose(() => clearInterval(interval));
  }

  /**
   * Cleanup function that clears the interval.
   */
  return () => {
    clearInterval(interval);
  };
};
