import { useState, useEffect } from "react";

/**
 * A hook to use session storage
 * @param key The session storage key
 * @param initialValue The initial value
 * @returns The session storage value, a function to set the session storage, and a function to clear the session storage
 */
const useSessionStorage = <T,>(
  key: string,
  initialValue?: T
): [
  /**
   * The session storage value
   */
  T,
  /**
   * Set the session storage
   */
  (value: T) => void,
  /**
   * Clear the session storage
   */
  () => void
] => {
  const [state, setState] = useState<T>(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    if (!state) return;

    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  /**
   * Clear the session storage
   * @returns void
   */
  function clear() {
    sessionStorage.removeItem(key);
  }

  return [state, setState, clear];
};

export default useSessionStorage;
