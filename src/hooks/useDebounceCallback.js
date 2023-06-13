import { useCallback, useEffect, useRef } from "react";

const DEFAULT_DEBOUNCE = 2000;

export function useDebouncedCallback(callback, debounce = DEFAULT_DEBOUNCE) {
  const searchTimer = useRef();

  const clear = () => {
    if (searchTimer.current) {
      clearTimeout(searchTimer.current);
      searchTimer.current = null;
    }
  };

  useEffect(() => {
    return clear;
  }, []);

  const onChange = (...params) => {
    clear();

    searchTimer.current = setTimeout(() => callback(...params), debounce);
  };

  const onChangeCallback = useCallback(onChange, [callback, debounce]);

  return onChangeCallback;
}
