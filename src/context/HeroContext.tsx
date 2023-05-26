import { useState, createContext } from 'react'
import { IHeroContext } from '../types/HeroContext'
import { CanMap, CanMapValue } from '../consts/canMap'

const HeroContext = createContext<any>(null)

export const HeroProvider = ({ children }: { children: JSX.Element | undefined }) => {
  const [canMap, setCanMap] = useState<Map<number, CanMapValue>>(CanMap)
  const [noneHovered, setNoneHovered] = useState<boolean>(true)
  const [anyHovered, setAnyHovered] = useState<boolean>(false)

  const updateHoveredCan = (index: number, hovered: boolean) => {
    const newCanMap = new Map<number, any>(canMap)
    newCanMap.set(index, { ...canMap.get(index), hovered: hovered })

    const noneIsHovered = Array.from(newCanMap.values()).every((can) => !can.hovered)
    const anyIsHovered = Array.from(newCanMap.values()).some((can) => can.hovered)

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

    setCanMap(newCanMap)
  }

  const providers: IHeroContext = {
    canMap,
    updateHoveredCan,
    noneHovered,
    anyHovered,
  }

  return <HeroContext.Provider value={providers}>{children}</HeroContext.Provider>
}

export default HeroContext
