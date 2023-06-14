import { useState } from "react";

export function useDishCount(initial) {
  const [value, setValue] = useState(initial);

  const decreaseCount = () => {
    setValue(value - 1);
  };

  const increaseCount = () => {
    setValue(value + 1);
  };

  return [value, decreaseCount, increaseCount];
}
