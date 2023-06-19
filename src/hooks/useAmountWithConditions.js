import { useCallback, useMemo, useState } from "react";

export const useAmountWithConditions = ({ initialAmount = 0, min, max }) => {
  const { amount, increment, decrement } = useAmount();

  const decrementWithMinCheck = useCallback(() => {
    if (amount > min) {
      decrement();
    }
  }, [amount, decrement, min]);

  const incrementWithMinCheck = useCallback(() => {
    if (amount < max) {
      increment();
    }
  }, [amount, increment, max]);

  return {
    amount,
    decrement: decrementWithMinCheck,
    increment: incrementWithMinCheck,
  };
};
