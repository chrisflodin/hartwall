export enum ProductType {
  CAN,
  BOTTLE,
}

export enum Colors {
  YELLOW = '#fffe00',
  GREEN = '#30feb3',
  BLUE = '#3deeff',
  RED = '#fe1f27',
  GINGER_1 = '#2D231A',
  GINGER_2 = '#676144',
  GINGER_3 = '#959D03',
  GINGER_4 = '#783508',
}

export interface BrewMapValue {
  primaryColor: Colors
  hovered: boolean
  flavour: string
  text: {
    title: string
    description: string
  }
  backDropOpacity?: boolean
  backgroundSVG?: React.FunctionComponent | React.ComponentClass
}
