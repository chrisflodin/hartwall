import { useEffect, useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'
import { motion, AnimatePresence } from 'framer-motion'
import { LeftIcon, RightIcon } from '../SVGs/Icons'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'

function FlavourCarousel() {
  const [flavours, setFlavours] = useState([...FLAVOURS, ...FLAVOURS])

  return (
    <div className={styles.swiperContainer}>
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={3} navigation loop>
        {flavours.map((flavour, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={styles.swiperSlide}>
                <motion.img
                  whileHover={{ scale: 1.05, cursor: 'pointer' }}
                  whileTap={{ scale: 0.95 }}
                  alt={`${i}: Can of ${flavour}`}
                  src={`../../assets/images/${flavour}.png`}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default FlavourCarousel
