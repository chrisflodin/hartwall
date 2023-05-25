import { CanMapValue } from '../consts/canMap'

export interface IHeroContext {
  canMap: Map<number, CanMapValue>
  updateHoveredCan: (index: number, hovered: boolean) => void
  noneHovered: boolean
}
