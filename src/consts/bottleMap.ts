import { BubbleBackDrop } from '../components/SVGs/Backdrops'
import { BrewMapValue, Colors } from './types'

export const BottleMap = new Map<number, BrewMapValue>()

BottleMap.set(0, {
  primaryColor: Colors.GINGER_1,
  hovered: false,
  flavour: 'ginger_classic',
  text: {
    title: 'STONE’S GINGER JOE 4% 33 CL',
    description:
      'Perinteinen Ginger Joe 4 % on raikas, tyylikäs ja helppo valinta arkeen ja juhlaan. Klassikko, josta liekkiviikset tunnetaan! Kiehtovasti kielellä kuumotteleva inkivääri saa nostetta makeudesta, joka tekee Ginger Joesta raikkaan ja virkistävän juomaelämyksen. Kuumottelevan kupliva inkiväärijuoma toimii sekä jääkylmänä että höyryäväksi lämmitettynä ja taipuu moniin drinkkeihin. Testaa sushin tai muiden aasialaistyyppisten ruokien kanssa tai koppaa kaveriksi rennolle piknikille.',
  },
  background: BubbleBackDrop,
})

BottleMap.set(1, {
  primaryColor: Colors.GINGER_2,
  hovered: false,
  flavour: 'ginger_strong',
  text: {
    title: 'STONE’S GINGER JOE STRONG 6.5% 33 CL',
    description:
      'Vahva ja voimakkaan makuinen Ginger Joe Strong 6,5 % on vähän enemmän kaikkea. Sinulle, joka et pelkää haasteita. Täpäkästi inkivääriä sisältävä Ginger Joe Strong hurmaa voimakkaiden makuelämysten metsästäjät. Enemmän potkua – enemmän mahdollisuuksia! Testaa seurustelujuomana ja valmistaudu sähäkkään iltaan.',
  },
  background: BubbleBackDrop,
})
BottleMap.set(2, {
  primaryColor: Colors.GINGER_3,
  hovered: false,
  flavour: 'ginger_pear',
  text: {
    title: 'STONE’S GINGER JOE PEAR 4% 33 CL',
    description:
      'Päärynällä silattu Ginger Joe 4 % on kiehtova yhdistelmä kipakkaa inkivääriä ja pehmeästi pyöristyvää päärynää. Sopii erityisesti siiderien ystävälle! Päärynän herkullinen makeus täydentää inkiväärin kipinöivää lämpöä ja valloittaa siiderityyppisten juomien ystävän. Lisää lasiin jäät ja viimeistele limellä tai sitruunalla – tai nautiskele suoraan pullosta hyvässä seurassa. ',
  },
  background: BubbleBackDrop,
})
BottleMap.set(3, {
  primaryColor: Colors.GINGER_4,
  hovered: false,
  flavour: 'ginger_non_alcoholic',
  text: {
    title: 'STONE’S GINGER JOE NON-ALCOHOLIC 33 CL',
    description:
      'Perinteinen Ginger Joe 4 % on raikas, tyylikäs ja helppo valinta arkeen ja juhlaan. Klassikko, josta liekkiviikset tunnetaan! Kiehtovasti kielellä kuumotteleva inkivääri saa nostetta makeudesta, joka tekee Ginger Joesta raikkaan ja virkistävän juomaelämyksen. Kuumottelevan kupliva inkiväärijuoma toimii sekä jääkylmänä että höyryäväksi lämmitettynä ja taipuu moniin drinkkeihin. Testaa sushin tai muiden aasialaistyyppisten ruokien kanssa tai koppaa kaveriksi rennolle piknikille.',
  },
  background: BubbleBackDrop,
})
