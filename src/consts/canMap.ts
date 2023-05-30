import { AppleSVGBackdrop, PearSVGBackdrop, Raspberry, StrawberrySVGBackdrop } from '../components/SVGs/Backdrops'
import { BrewMapValue, Colors } from './types'

export const CanMap = new Map<number, BrewMapValue>()

CanMap.set(0, {
  primaryColor: Colors.YELLOW,
  hovered: false,
  flavour: 'Apple',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
  background: AppleSVGBackdrop,
})
CanMap.set(1, {
  primaryColor: Colors.BLUE,
  hovered: false,
  flavour: 'Raspberry',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
  background: Raspberry,
})
CanMap.set(2, {
  primaryColor: Colors.GREEN,
  hovered: false,
  flavour: 'Pear',
  text: {
    title: 'Hartwall Limonadi Omena',
    description:
      'Ikoninen Hartwallin Omenalimonadi on pehmeä ja tasapainoinen, omenan makuinen limonadi. Omenalimonadissa on matala hiilihappotaso sekä uniikki maku, jota suomalaiset ovat rakastaneet jo vuosikymmeniä.',
  },
  background: PearSVGBackdrop,
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
  background: StrawberrySVGBackdrop,
})
