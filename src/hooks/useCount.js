import { useCallback, useState } from "react";

export function useCount(initialCount = 0) {

    let [count, setCount] = useState(initialCount);

    const increaseCount = useCallback(() => setCount((currentCount) => currentCount+1), [count]);
    const decreaseCount = useCallback(() => setCount((currentCount) => currentCount-1), [count]);
    
    return [count, increaseCount, decreaseCount];
}