import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BrewMapValue, ProductType } from '../../consts/types'
import HeroContext from '../../context/HeroContext'
import { IHeroContext } from '../../types/HeroContext'
import { Button } from '../Button'
import styles from './index.module.scss'

function FlavourCarousel() {
  const { productMap, productType }: IHeroContext = useContext(HeroContext)

  function createKeys(map: Map<number, BrewMapValue>): number[] {
    return [...Array.from(map.keys()), ...Array.from(map.keys())]
  }

  const [productKeys, setProductKeys] = useState(createKeys(productMap))
  useEffect(() => {
    setProductKeys(createKeys(productMap))
  }, [productMap])

  return (
    <div className={styles.swiperContainer}>
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={3} navigation loop>
        {productKeys &&
          productKeys.map((i, key) => {
            return (
              <SwiperSlide key={key}>
                <div className={styles.swiperSlide}>
                  <div className={styles.swiperImg}>
                    <motion.img
                      height={340}
                      whileHover={{ scale: 1.05, cursor: 'pointer' }}
                      whileTap={{ scale: 0.95 }}
                      alt={`${key}: Can of ${productMap.get(i)?.flavour}`}
                      src={`../../assets/images/${productMap.get(i)?.flavour}.png`}
                    />
                  </div>
                  <p
                    style={{ color: productType === ProductType.BOTTLE ? 'black' : '' }}
                    className={styles.flavourTitle}
                  >
                    {productMap.get(i)?.text.title}
                  </p>
                  <Button
                    buttonColor="green"
                    size="medium"
                    style={{ pointerEvents: 'auto', border: '1px solid black', color: 'black' }}
                    onClick={() => {
                      // TODO: Implement buy now functionality
                      console.log(`Buy now clicked for ${productMap.get(i)?.text.title}`)
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default FlavourCarousel
