import { useEffect, useRef, useMemo } from "react";
import { debounce } from "@/utils/schedule";

export const useDebounce = (callback, ms = 1000) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, ms);
  }, [ms]);

  return debouncedCallback;
};