import { useState, createContext } from 'react'
import { IHeroContext } from '../types/HeroContext'
import { CanMap } from '../consts/canMap'
import { BrewMapValue, ProductType } from '../consts/types'
import { BottleMap } from '../consts/bottleMap'

const HeroContext = createContext<any>(null)

export const HeroProvider = ({ children }: { children: JSX.Element | undefined }) => {
  const [productMap, setProductMap] = useState<Map<number, BrewMapValue>>(BottleMap)
  const [productType, setProductType] = useState<ProductType>(ProductType.BOTTLE)
  const [noneHovered, setNoneHovered] = useState<boolean>(true)
  const [anyHovered, setAnyHovered] = useState<boolean>(false)

  const updateHoveredCan = (index: number, hovered: boolean) => {
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

  const providers: IHeroContext = {
    switchProductType,
    productMap,
    updateHoveredCan,
    noneHovered,
    anyHovered,
    productType,
    setProductType,
  }

  return <HeroContext.Provider value={providers}>{children}</HeroContext.Provider>
}

export default HeroContext
