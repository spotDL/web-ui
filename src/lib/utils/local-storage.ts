type Action = 'get' | 'set';

export const useLocalStorage = (action: Action, key: string, value?: string) => {
  if (action === 'get') {
    return localStorage.getItem(key) ? String(localStorage.getItem(key)!) : null;
  }

  if (action === 'set') {
    localStorage.setItem(key, String(value));
  }
  return null;
};
