import { useCallback, useState } from "react";

const INITIAL_STATE = 0;

export const useCount = (initial = INITIAL_STATE) => {
  const [count, setCount] = useState(initial);

  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);
  const reset = useCallback((count) => setCount(count), [])

  return {
    count,
    increment,
    decrement,
    reset,
  }
}