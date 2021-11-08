function getItem<T>(key: string): T | null;
function getItem<T>(key: string, defaultValue: T): T;
function getItem(key: string, defaultValue = null) {
  const storageValue = localStorage.getItem(key);
  return !!storageValue ? JSON.parse(storageValue) : defaultValue;
}

function setItem<T>(key: string, value: T) {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
}

function removeItem(key: string) {
  localStorage.removeItem(key);
}

export { getItem, setItem, removeItem };
