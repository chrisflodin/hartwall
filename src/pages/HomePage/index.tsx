import { useContext } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import LandingCanBackground from './LandingCanBackground'
import styles from './index.module.scss'
import HeroContext from '../../context/HeroContext'
import LandingCanBackgroundTab from './LandingCanBackgroundTab'
import LandingCanImage from './LandingCanImage'
import LandingCanBackgroundDetail from './LandingCanDetails'
import LandingCanLargeImage from './LandingCanDetails'
import FlavourCarousel from '../../components/FlavourCarousel'

function HomePage() {
  const { canMap, anyHovered, updateHoveredCan }: IHeroContext = useContext(HeroContext)

  const canBackgrounds = Array.from(canMap.entries()).map(([index, can]) => (
    <LandingCanBackground
      BackgroundSVG={can.backgroundSVG}
      hovered={can.hovered}
      backgroundColor={can.primaryColor}
      index={index}
      key={index}
    />
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
    <LandingCanLargeImage
      text={can.text}
      anyHovered={anyHovered}
      flavour={can.flavour}
      hovered={can.hovered}
      index={index}
    />
  ))

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.backgroundContainer}>
          {canBackgrounds}
          <div className={styles.can_image_container}>{canImages}</div>
        </div>
        {largeCanImages}
        <div className={styles.tabContainer}>{canTabs}</div>
      </div>
      <FlavourCarousel />
    </>
  )
}
export default HomePage
