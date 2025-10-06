import { createContext, useEffect, useState } from 'react'
import { BottleMap } from '../consts/bottleMap'
import { CanMap } from '../consts/canMap'
import { BrewMapValue, ProductType } from '../consts/types'
import { IHeroContext } from '../types/HeroContext'

const HeroContext = createContext<any>(null)

export const HeroProvider = ({ children }: { children: JSX.Element | undefined }) => {
  const [hasInteracted, setHasInteracted] = useState<boolean>(false)
  const [productMap, setProductMap] = useState<Map<number, BrewMapValue>>(CanMap)
  const [productType, setProductType] = useState<ProductType>(ProductType.CAN)
  const [noneHovered, setNoneHovered] = useState<boolean>(true)
  const [anyHovered, setAnyHovered] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const updateHoveredCan = (index: number, hovered: boolean) => {
    if (!hasInteracted) {
      setHasInteracted(true)
      return
    }

    const newProductMap = new Map<number, any>(productMap)
    newProductMap.set(index, { ...productMap.get(index), hovered: hovered })

    const noneIsHovered = Array.from(newProductMap.values()).every((can) => !can.hovered)
    const anyIsHovered = Array.from(newProductMap.values()).some((can) => can.hovered)

    if (anyIsHovered) {
      setAnyHovered(true)
    } else {
      setAnyHovered(false)
    }

    if (noneIsHovered) {
      setNoneHovered(true)
    } else {
      setNoneHovered(false)
    }

    setProductMap(newProductMap)
  }

  const switchProductType = () => {
    if (productType === ProductType.CAN) {
      setProductType(ProductType.BOTTLE)
      setProductMap(BottleMap)
    } else {
      setProductType(ProductType.CAN)
      setProductMap(CanMap)
    }
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn')
    if (loggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (password: string) => {
    if (password === 'hartwall-1836') {
      setIsLoggedIn(true)
      localStorage.setItem('loggedIn', 'true')
    }
  }

  const providers: IHeroContext = {
    switchProductType,
    productMap,
    updateHoveredCan,
    noneHovered,
    anyHovered,
    productType,
    setProductType,
    isLoggedIn,
    handleLogin,
  }

  return <HeroContext.Provider value={providers}>{children}</HeroContext.Provider>
}

export default HeroContext
