import { useState } from 'react';

export function useCount(startNum = 0) {
  const [count, setCount] = useState(startNum);

  return {
    num: count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
}
