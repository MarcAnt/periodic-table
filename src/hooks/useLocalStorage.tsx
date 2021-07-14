import { useState, useEffect } from "react";

type ReturnType<T> = [T | undefined];
export const useLocalstorage = <T,>(
  key: string,
  initialValue: T
): ReturnType<T> => {
  const [items] = useState(() => {
    const value: string = window.localStorage.getItem(key) || "[]";
    return JSON.parse(value);
  });

  useEffect(() => {
    const value: string = window.localStorage.getItem(key) || "[]";
    if (!value || value === "{}" || value === "[]")
      window.localStorage.setItem(key, JSON.stringify(initialValue));
  }, [key, initialValue, items]);

  return [items];
};
