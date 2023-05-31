import debounce from 'debounce'
import { useEffect, useMemo, useRef } from 'react'

export const useDebounce = (callback: any, debounceTime: number) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const debouncedCallback = useMemo(() => {
    const func = () => {
      // @ts-ignore
      ref.current?.()
    }

    return debounce(func, debounceTime)
  }, [])

  return debouncedCallback
}
