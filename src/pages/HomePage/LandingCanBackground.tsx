import { motion } from 'framer-motion'
import styles from './LandingCanBackground.module.scss'
import { useContext, useState } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import HeroContext from '../../context/HeroContext'

interface LandingCanBackgroundProps {
  backgroundColor: string
  index: number
  hovered: boolean
  staticBackground?: boolean
}

function LandingCanBackground({ backgroundColor, index, hovered, staticBackground }: LandingCanBackgroundProps) {
  const { updateHoveredCan, noneHovered }: IHeroContext = useContext(HeroContext)

  const styling = {
    backgroundColor,
  }

  const getWidth = () => {
    if (hovered) return '100%'
    if (!hovered && !noneHovered) return '0%'
    if (noneHovered) return '25%'
    return '25%'
  }

  const initial = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  }

  return (
    <>
      <motion.div
        animate={{ width: getWidth() }}
        style={styling}
        className={`${styles.landing_can_container}` + (staticBackground ? ` ${styles.absolute}` : '')}
        initial={!staticBackground ? initial : {}}
        onHoverStart={(e) => updateHoveredCan(index, true)}
        onHoverEnd={(e) => updateHoveredCan(index, false)}
      ></motion.div>
    </>
  )
}
export default LandingCanBackground
