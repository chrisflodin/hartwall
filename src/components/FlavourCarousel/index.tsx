import { useContext, useEffect, useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'
import { motion } from 'framer-motion'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'
import { IHeroContext } from '../../types/HeroContext'
import HeroContext from '../../context/HeroContext'
import { BrewMapValue, ProductType } from '../../consts/types'

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
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default FlavourCarousel
