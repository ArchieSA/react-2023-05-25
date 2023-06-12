import { useRef, useCallback } from 'react'

export const useGetLatest = (obj) => {
  const ref = useRef()
  ref.current = obj

  return useCallback(() => ref.current, [])
}
