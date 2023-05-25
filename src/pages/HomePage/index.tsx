import { useContext } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import LandingCanBackground from './LandingCanBackground'
import styles from './index.module.scss'
import HeroContext from '../../context/HeroContext'
import LandingCanBackgroundTab from './LandingCanBackgroundTab'
import LandingCanImage from './LandingCanImage'

function HomePage() {
  const { canMap }: IHeroContext = useContext(HeroContext)

  const canBackgrounds = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanBackground hovered={can.hovered} backgroundColor={can.primaryColor} index={index} key={index} />
  ))

  const canTabs = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanBackgroundTab hovered={can.hovered} backgroundColor={can.primaryColor} index={index} key={index} />
  ))

  const canImages = Array.from(canMap.entries()).map(([index, can]) => <LandingCanImage key={index} />)

  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundContainer}>{canBackgrounds}</div>
      <div className={styles.tabContainer}>{canTabs}</div>
      {canImages}
    </div>
  )
}
export default HomePage
