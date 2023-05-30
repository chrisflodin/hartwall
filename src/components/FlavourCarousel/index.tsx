import { useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'
import { CanMap } from '../../consts/canMap'
import { motion } from 'framer-motion'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'

function FlavourCarousel() {
  let canMapKeys = Array.from(CanMap.keys())
  canMapKeys = [...canMapKeys, ...canMapKeys]

  return (
    <div className={styles.swiperContainer}>
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={3} navigation loop>
        {canMapKeys &&
          canMapKeys.map((i) => {
            return (
              <SwiperSlide key={i}>
                <div className={styles.swiperSlide}>
                  <div className={styles.swiperImg}>
                    <motion.img
                      height={340}
                      whileHover={{ scale: 1.05, cursor: 'pointer' }}
                      whileTap={{ scale: 0.95 }}
                      alt={`${i}: Can of ${CanMap.get(i)?.flavour}`}
                      src={`../../assets/images/${CanMap.get(i)?.flavour}.png`}
                    />
                  </div>
                  <p className={styles.flavourTitle}>{CanMap.get(i)?.text.title}</p>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default FlavourCarousel
