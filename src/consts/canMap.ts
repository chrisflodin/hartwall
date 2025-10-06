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
    title: 'Hartwall Limonadi Vadelma',
    description:
      'Herkullisen raikas Vadelmalimonadi, joka tyydyttää makeanhimon ja tekee päivästä kuin päivästä pisaran verran makeamman!',
  },
  background: Raspberry,
})
CanMap.set(2, {
  primaryColor: Colors.GREEN,
  hovered: false,
  flavour: 'Pear',
  text: {
    title: 'Hartwall Limonadi Päärynä',
    description:
      'Raikas, mutta intensiivisen makea Päärynälimonadi kruunaa kaikenlaiset herkkuhetket ja tekee päivästä kuin päivästä pisaran verran makeamman!',
  },
  background: PearSVGBackdrop,
})
CanMap.set(3, {
  primaryColor: Colors.RED,
  hovered: false,
  flavour: 'Strawberry',
  text: {
    title: 'Hartwall Limonadi Mansikka',
    description:
      'Hartwall Limonadi-perheen herkullinen uutuusmaku 2022! Hartwall Limonadi Mansikka on raikas, mutta intensiivisen makea limonadi, jossa maistuvat kesän parhaat hetket - vaikka keskellä syksyn pimeyttä!',
  },
  background: StrawberrySVGBackdrop,
})
