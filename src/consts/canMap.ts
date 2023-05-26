export enum Colors {
  YELLOW = '#fffe00',
  GREEN = '#30feb3',
  BLUE = '#3deeff',
  RED = '#fe1f27',
}

export interface CanMapValue {
  primaryColor: Colors
  hovered: boolean
  flavour: string
}

export const CanMap = new Map<number, CanMapValue>()

CanMap.set(0, { primaryColor: Colors.YELLOW, hovered: false, flavour: 'Apple' })
CanMap.set(1, { primaryColor: Colors.GREEN, hovered: false, flavour: 'Pear' })
CanMap.set(2, { primaryColor: Colors.BLUE, hovered: false, flavour: 'Raspberry' })
CanMap.set(3, { primaryColor: Colors.RED, hovered: false, flavour: 'Strawberry' })
