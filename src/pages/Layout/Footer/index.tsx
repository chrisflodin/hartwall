import { FacebookLogo, InstagramLogo } from '../../../components/SVGs/Logos'
import { motion } from 'framer-motion'
import HeroContext from '../../../context/HeroContext'
import { useContext } from 'react'
import { IHeroContext } from '../../../types/HeroContext'
import { ProductType } from '../../../consts/types'
import BottleFooter from './BottleFooter'
import CanFooter from './CanFooter'

function Footer() {
  const { productType }: IHeroContext = useContext(HeroContext)

  if (productType === ProductType.BOTTLE) return <BottleFooter />

  return <CanFooter />
}

export default Footer
