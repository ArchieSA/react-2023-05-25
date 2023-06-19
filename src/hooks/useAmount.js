import { useCallback, useMemo, useState } from "react";

export const useAmount = (initialAmount = 0) => {
  const [amount, setAmount] = useState(initialAmount);

  const increment = useCallback(
    () => setAmount((currentAmount) => currentAmount + 1),
    []
  );

  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount - 1),
    []
  );

  return { amount, decrement, increment };
};
