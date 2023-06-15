import React from 'react';

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const useCount = () => {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = React.useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return { count, increment, decrement };
};
