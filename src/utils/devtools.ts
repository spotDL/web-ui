/**
 * Start Vue Devtools. Use only in development mode.
 * @returns {Promise<void>} A Promise that resolves once Vue Devtools is connected.
 */
export const init = async (): Promise<void> => {
  (await import('@vue/devtools')).connect('http://localhost', 8098);
};
