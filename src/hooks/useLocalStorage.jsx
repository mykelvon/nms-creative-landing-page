import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  if (typeof window === "undefined") return defaultValue;

  try {
    const saved = localStorage.getItem(key);
    if (saved === null) return defaultValue;
    return JSON.parse(saved);
  } catch (error) {
    console.error("Error retrieving value from localStorage:", error);
    return defaultValue;
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