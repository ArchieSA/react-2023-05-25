import { useEffect, useRef } from 'react'

export const useDidUpdateEffect = (callback, deps) => {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (!isInitialMount.current) {
      return callback()
    }
    isInitialMount.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
