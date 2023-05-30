import { BrewMapValue, ProductType } from '../consts/types'

export interface IHeroContext {
  productMap: Map<number, BrewMapValue>
  updateHoveredCan: (index: number, hovered: boolean) => void
  noneHovered: boolean
  anyHovered: boolean
  productType: ProductType
  setProductType: (productType: ProductType) => void
  switchProductType: () => void
}
