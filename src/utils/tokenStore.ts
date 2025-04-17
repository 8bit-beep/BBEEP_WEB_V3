export const setItemWithExpiry = (key: string, value: unknown): void => {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + 12 * 60 * 60 * 1000,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItemWithExpiry = (key: string): unknown | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr) as { value: unknown; expiry: number };
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
