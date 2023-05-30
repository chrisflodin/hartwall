import { motion } from 'framer-motion'
import styles from './LandingCanBackground.module.scss'
import { useContext, useState } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import HeroContext from '../../context/HeroContext'
import { animationDuration } from './animation-config'

interface LandingCanBackgroundProps {
  backgroundColor: string
  index: number
  hovered: boolean
  staticBackground?: boolean
  BackgroundSVG: React.FunctionComponent | React.ComponentClass
}

function LandingCanBackground({
  backgroundColor,
  index,
  hovered,
  staticBackground,
  BackgroundSVG,
}: LandingCanBackgroundProps) {
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

  const duration = animationDuration * 0.3

  return (
    <>
      <motion.div
        animate={{ width: getWidth() }}
        style={styling}
        className={`${styles.landing_can_container}` + (staticBackground ? ` ${styles.absolute}` : '')}
        initial={!staticBackground ? initial : {}}
        onHoverStart={(e) => updateHoveredCan(index, true)}
        onHoverEnd={(e) => updateHoveredCan(index, false)}
        transition={{ duration }}
      >
        <BackgroundSVG />
      </motion.div>
    </>
  )
}
export default LandingCanBackground
