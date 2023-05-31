import { useEffect, useState } from 'react'

const useResolutionSupported = (minWidth: number) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn
}

export default useResolutionSupported
