import { useContext } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import LandingCanBackground from './LandingCanBackground'
import styles from './index.module.scss'
import HeroContext from '../../context/HeroContext'
import LandingCanBackgroundTab from './LandingCanBackgroundTab'
import LandingCanImage from './LandingCanImage'
import LandingCanBackgroundDetail from './LandingCanLargeImage'
import LandingCanLargeImage from './LandingCanLargeImage'

function HomePage() {
  const { canMap, anyHovered, updateHoveredCan }: IHeroContext = useContext(HeroContext)

  const canBackgrounds = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanBackground hovered={can.hovered} backgroundColor={can.primaryColor} index={index} key={index} />
  ))
  const canStaticBackgrounds = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanBackground hovered={can.hovered} backgroundColor={can.primaryColor} index={index} key={index} />
  ))

  const canTabs = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanBackgroundTab
      flavour={can.flavour}
      hovered={can.hovered}
      backgroundColor={can.primaryColor}
      index={index}
      key={index}
    />
  ))

  const canImages = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanImage
      flavour={can.flavour}
      hovered={can.hovered}
      backgroundColor={can.primaryColor}
      index={index}
      key={index}
      anyHovered={anyHovered}
    />
  ))

  const largeCanImages = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanLargeImage anyHovered={anyHovered} flavour={can.flavour} hovered={can.hovered} index={index} />
  ))

  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundContainer}>
        {canBackgrounds}
        <div className={styles.can_image_container}>{canImages}</div>
      </div>
      {largeCanImages}
      <div className={styles.tabContainer}>{canTabs}</div>
    </div>
  )
}
export default HomePage
