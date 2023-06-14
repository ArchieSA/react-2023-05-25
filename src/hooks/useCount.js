const { useState, useCallback } = require("react");

const useCount = (initValue) => {
  const [count, setCount] = useState(initValue);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return { count, increment, decrement };
};

export default useCount;
