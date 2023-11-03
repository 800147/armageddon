'use client';

import { useState, useCallback, useEffect } from "react";
const STORAGE_CHANGED_EVENT_TYPE = "STORAGE_CHANGED_EVENT_TYPE";

type StorageType = "local" | "session";

const useStorage: (
  key: string,
  type?: StorageType
) => [string | null, (value: string | null) => void] = (
  key,
  type = "local"
) => {
  const storage = typeof window === 'undefined' ? undefined : type === "local" ? localStorage : sessionStorage;
  const [value, setValue] = useState(storage?.getItem(key));

  const changeValue = useCallback(
    (newValue: string | null) => {
      if (newValue === null) {
        storage?.removeItem(key);
      } else {
        storage?.setItem(key, newValue);
      }

      window.dispatchEvent(new Event(STORAGE_CHANGED_EVENT_TYPE));
    },
    [key, storage]
  );

  const onValueChange = useCallback(
    () => setValue(storage?.getItem(key)),
    [setValue, key, storage]
  );

  useEffect(() => {
    window.addEventListener(STORAGE_CHANGED_EVENT_TYPE, onValueChange);
    window.addEventListener("storage", onValueChange);

    return () => {
      window.removeEventListener(STORAGE_CHANGED_EVENT_TYPE, onValueChange);
      window.removeEventListener("storage", onValueChange);
    };
  }, [onValueChange]);

  return [value ?? null, changeValue];
};

export default useStorage;
