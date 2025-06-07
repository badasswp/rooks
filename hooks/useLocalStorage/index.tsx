/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage Hook.
 *
 * This hook is used to track the localstorage
 * values in your browser.
 *
 * It mutates if any of the local storage item or
 * options changes.
 *
 * @params {string} key Storage Key.
 * @returns {any} The local storage value.
 */
const useLocalStorage = (key: string): any => {
  const [storageItem, setStorageItem] = useState(
    JSON.stringify(localStorage.getItem(key))
  );

  const handleSetItemChange = useCallback(
    (e: StorageEvent) => {
      if (e.key !== key) {
        return;
      }

      const item = e.key as string;
      const current = JSON.stringify(localStorage.getItem(item));

      setStorageItem(prev => (prev !== current ? current : prev));
    },
    [key]
  );

  useEffect(() => {
    window.addEventListener('storage', handleSetItemChange);

    return () => {
      window.removeEventListener('storage', handleSetItemChange);
    };
  }, [handleSetItemChange]);

  return JSON.parse(storageItem);
};

export default useLocalStorage;
