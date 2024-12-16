import { useState, useEffect } from "react";

type UseLocalStorageNumberArray = (
  key: string,
  initialValue: number[]
) => readonly [number[], (value: number[]) => void];

export const useLocalStorage: UseLocalStorageNumberArray = (
  key,
  initialValue
) => {
  const [storedValue, setStoredValue] = useState<number[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};

// const [numbers, setNumbers] = useLocalStorage("itemIdNumbers", []);
