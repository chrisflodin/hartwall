import styles from './LandingCanBackgroundTab.module.scss'
import { useContext, useState } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import HeroContext from '../../context/HeroContext'

interface LandingCanBackgroundTabProps {
  backgroundColor: string
  index: number
  hovered: boolean
}

function LandingCanBackgroundTab({ backgroundColor, index }: LandingCanBackgroundTabProps) {
  const { canMap, updateHoveredCan, noneHovered }: IHeroContext = useContext(HeroContext)

  const styling = {
    backgroundColor,
  }

  return (
    <>
      <div style={styling} className={styles.can_tab_container}></div>
    </>
  )
}
export default LandingCanBackgroundTab
