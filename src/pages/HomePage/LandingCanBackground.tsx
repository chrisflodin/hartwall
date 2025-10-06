import { motion } from 'framer-motion'
import styles from './LandingCanBackground.module.scss'
import { useContext, useState } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import HeroContext from '../../context/HeroContext'
import { animationDuration } from './animation-config'
import { ProductType } from '../../consts/types'
import { useDebounce } from '../../hooks/useDebounce'
import { debounce } from 'debounce'

interface LandingCanBackgroundProps {
  backgroundColor: string
  index: number
  hovered: boolean
  staticBackground?: boolean
  Background: React.FunctionComponent | React.ComponentClass | null
  productType: ProductType
}

function LandingCanBackground({
  backgroundColor,
  index,
  hovered,
  staticBackground,
  Background,
  productType,
}: LandingCanBackgroundProps) {
  const { updateHoveredCan, noneHovered }: IHeroContext = useContext(HeroContext)

  const styling = {
    backgroundColor,
    opacity: productType === ProductType.CAN ? 1 : 0.8,
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
        onHoverStart={(e) => debounce(() => updateHoveredCan(index, true), 50)()}
        onHoverEnd={(e) => debounce(() => updateHoveredCan(index, false), 50)()}
        transition={{ duration }}
      >
        {Background && <Background />}
      </motion.div>
    </>
  )
}
export default LandingCanBackground
