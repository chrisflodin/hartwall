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
  text: {
    title: string
    description: string
  }
}

export const CanMap = new Map<number, CanMapValue>()

CanMap.set(0, {
  primaryColor: Colors.YELLOW,
  hovered: false,
  flavour: 'Apple',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
})
CanMap.set(1, {
  primaryColor: Colors.GREEN,
  hovered: false,
  flavour: 'Pear',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
})
CanMap.set(2, {
  primaryColor: Colors.BLUE,
  hovered: false,
  flavour: 'Raspberry',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
})
CanMap.set(3, {
  primaryColor: Colors.RED,
  hovered: false,
  flavour: 'Strawberry',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
})
