import { useContext } from 'react'
import { IHeroContext } from '../../types/HeroContext'
import LandingCanBackground from './LandingCanBackground'
import styles from './index.module.scss'
import HeroContext from '../../context/HeroContext'
import LandingCanBackgroundTab from './LandingCanBackgroundTab'
import LandingCanImage from './LandingCanImage'
import LandingCanLargeImage from './LandingCanDetails'
import FlavourCarousel from '../../components/FlavourCarousel'

function HomePage() {
  const { productMap, anyHovered, productType }: IHeroContext = useContext(HeroContext)

  const productBackgrounds = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanBackground
      BackgroundSVG={product.backgroundSVG ? product.backgroundSVG : null}
      hovered={product.hovered}
      backgroundColor={product.primaryColor}
      index={index}
      key={index}
    />
  ))

  const productTabs = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanBackgroundTab
      flavour={product.flavour}
      hovered={product.hovered}
      backgroundColor={product.primaryColor}
      index={index}
      key={index}
    />
  ))

  const productImages = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanImage
      flavour={product.flavour}
      hovered={product.hovered}
      backgroundColor={product.primaryColor}
      index={index}
      key={index}
      anyHovered={anyHovered}
    />
  ))

  const largeProductImages = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanLargeImage
      text={product.text}
      anyHovered={anyHovered}
      flavour={product.flavour}
      hovered={product.hovered}
      index={index}
      productType={productType}
    />
  ))

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.backgroundContainer}>
          {productBackgrounds}
          <div className={styles.can_image_container}>{productImages}</div>
        </div>
        {largeProductImages}
        <div className={styles.tabContainer}>{productTabs}</div>
      </div>
      <FlavourCarousel />
    </>
  )
}
export default HomePage
