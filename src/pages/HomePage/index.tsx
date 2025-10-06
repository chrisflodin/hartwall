import { useContext } from 'react'
import FlavourCarousel from '../../components/FlavourCarousel'
import { ProductType } from '../../consts/types'
import HeroContext from '../../context/HeroContext'
import { IHeroContext } from '../../types/HeroContext'
import LandingCanBackground from './LandingCanBackground'
import LandingCanBackgroundTab from './LandingCanBackgroundTab'
import LandingCanDetails from './LandingCanDetails'
import LandingCanImage from './LandingCanImage'
import styles from './index.module.scss'

function HomePage() {
  const { productMap, anyHovered, productType, switchProductType }: IHeroContext = useContext(HeroContext)

  const productBackgrounds = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanBackground
      productType={productType}
      Background={product.background ? product.background : null}
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
      productType={productType}
      key={index}
    />
  ))

  const productImages = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanImage flavour={product.flavour} index={index} key={index} anyHovered={anyHovered} />
  ))

  const largeProductImages = Array.from(productMap.entries()).map(([index, product]) => (
    <LandingCanDetails
      text={product.text}
      anyHovered={anyHovered}
      flavour={product.flavour}
      hovered={product.hovered}
      index={index}
      productType={productType}
      key={index}
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
        {/* <div className={styles.tabContainer}>
          <button onClick={switchProductType} className={styles.demo_button}>
            Demo: Switch product
          </button>
          {productTabs}
        </div> */}
      </div>
      {productType === ProductType.CAN ? (
        <>
          <p className={styles.bodyLemonadi}>
            Hartwall Limonadit uudistuivat! Vanhojen tuttujen herkuttelujuomien reseptit on raikastettu ja rakastetut
            Limonadit on tuotu herkullisiin 0,33l tölkkeihin. Uudistuksista huolimatta tallella on Limonadeille
            ominainen intensiivisen herkullinen ja makea maku, joka piristää niin parhaita kuin haastavampiakin päiviä!
          </p>
        </>
      ) : (
        <>
          <h1 className={styles.headerGingerJoe}>ginger joe – kipakka inkiväärijuoma puraisee polttavasti</h1>
          <p className={styles.bodyGingerJoe}>
            Kipakka inkiväärijuoma on raikas ja yllättävä makunautinto, joka herättelee makunystyröitä uudella,
            kiinnostavalla tavalla. Ginger Joe on aitoa inkivääriä sisältävä gluteeniton valmisjuoma, jonka historia
            ulottuu 1700-luvun Lontooseen. Antaudu inkiväärin poltteelle ja testaa Ginger Joe alkoholilla tai ilman!
          </p>
          <h1 className={styles.headerGingerJoe} style={{ marginBottom: 15 }}>
            GINGER JOE – TUOTTEET
          </h1>
        </>
      )}
      <FlavourCarousel />
      {productType === ProductType.CAN && (
        <p className={styles.bodyLemonadi}>
          Hartwall Limonadi on ollut suomalaisten tukena arjessa jo vuosikymmeniä. Limonadi on kruunannut parhaat päivät
          ja auttanut selättämään haastavimmat hetket. Näissä hetkissä kaipaamme jotain tuttua ja turvallista. Jotakin,
          joka tekee päivästämme pisaran verran makeamman. Ja näihin hetkiin kelpaa vain Hartwall Limonadi.
        </p>
      )}
    </>
  )
}
export default HomePage
