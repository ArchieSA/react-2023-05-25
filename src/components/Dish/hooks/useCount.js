import { useState, useMemo } from 'react'
import { useGetLatest } from '@/hooks/useGetLatest'

export const useCount = (initialCount, min = 0, max = Number.MAX_SAFE_INTEGER) => {
  const [ count, setCount ] = useState(initialCount)
  const getCountSetter = useGetLatest(setCount)


  const api = useMemo(() => ({
    inc: () => getCountSetter()(currentCount => Math.min(currentCount + 1, max)),
    dec: () => getCountSetter()(currentCount => Math.min(currentCount - 1, min)),
    reset: () => getCountSetter()(currentCount => min),
    resetTo: (value) => getCountSetter()(currentCount => Math.min(Math.max(value, min), max)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [max, min])

  return { api, count }
}
