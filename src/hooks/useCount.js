import { useCallback, useState } from "react";


export function useCount(initialCount) {
  
    const [count, setCount] = useState(initialCount)

    const increment = (stepChange) => {        
       (count >= 5) ? 5 : setCount(count + stepChange)
    }
    const decrement = (stepChange) => {
        (count === 0) ? 0 : setCount(count - stepChange)
    }
    
    const counter = useCallback((action,  stepChange = 1) => {
        switch (action) {
            case 'increment':
                increment(stepChange)
                break;
            case 'decrement':
                decrement(stepChange)
                break;
        }
    }, [count])

    return [count, counter]
}