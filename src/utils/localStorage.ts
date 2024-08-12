export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = <T>(key: string): T | null => {
  const data: string | null = localStorage.getItem(key);
  return data ? (data as unknown as T) : null;
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
