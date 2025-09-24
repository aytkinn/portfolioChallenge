import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    

    try {
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    } catch (error) {
      console.error("Geçersiz JSON değeri:", saved, error);
      return defaultValue;
    }
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};