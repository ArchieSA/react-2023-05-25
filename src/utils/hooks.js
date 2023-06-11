import { useEffect, useState } from 'react';

export const useDebounce = (value, delay = 2000) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const interaval = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(interaval);
    };
  }, [delay, value]);

  return debounceValue;
};
