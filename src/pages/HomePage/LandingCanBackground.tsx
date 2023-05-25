import { motion } from 'framer-motion'
import styles from './LandingCanBackground.module.scss'
import { useContext, useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'
import { IHeroContext } from '../../types/HeroContext'
import HeroContext from '../../context/HeroContext'
import { LandingCanHoverState } from '../../types/types'

interface LandingCanBackgroundProps {
  backgroundColor: string
  index: number
  hovered: boolean
}

function LandingCanBackground({ backgroundColor, index, hovered }: LandingCanBackgroundProps) {
  const { canMap, updateHoveredCan, noneHovered }: IHeroContext = useContext(HeroContext)

  const styling = {
    backgroundColor,
  }

  const getWidth = () => {
    if (hovered) return '100%'
    // if (!hovered && !noneHovered) return '25%'
    // if (noneHovered) return '25%'
    return '25%'
  }

  return (
    <>
      <motion.div
        animate={{ width: getWidth(), zIndex: hovered ? 1 : 0, position: hovered ? 'relative' : 'static' }}
        onHoverStart={(e) => updateHoveredCan(index, true)}
        onHoverEnd={(e) => updateHoveredCan(index, false)}
        style={styling}
        className={styles.landing_can_container}
        initial={{ width: '25%' }}
      ></motion.div>
    </>
  )
}
export default LandingCanBackground
