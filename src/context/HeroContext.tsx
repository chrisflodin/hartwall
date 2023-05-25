import { useState, createContext } from 'react'
import { IHeroContext } from '../types/HeroContext'
import { CanMap, CanMapValue } from '../consts/canMap'

const HeroContext = createContext<any>(null)

export const HeroProvider = ({ children }: { children: JSX.Element | undefined }) => {
  const [canMap, setCanMap] = useState<Map<number, CanMapValue>>(CanMap)
  const [noneHovered, setNoneHovered] = useState<boolean>(true)

  const updateHoveredCan = (index: number, hovered: boolean) => {
    const newCanMap = new Map<number, any>(canMap)
    newCanMap.set(index, { ...canMap.get(index), hovered: hovered })

    const noneIsHovered = Array.from(newCanMap.values()).every((can) => can.hovered === false)

    if (noneIsHovered) {
      setNoneHovered(true)
    } else {
      setNoneHovered(false)
    }

    setCanMap(newCanMap)
  }

  const providers: IHeroContext = {
    canMap,
    updateHoveredCan,
    noneHovered,
  }

  return <HeroContext.Provider value={providers}>{children}</HeroContext.Provider>
}

export default HeroContext
