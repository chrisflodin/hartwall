import { useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'
import styles from './index.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { LeftIcon, RightIcon } from '../SVGs/Icons'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'

function FlavourCarousel() {
  const [flavours, setFlavours] = useState([...FLAVOURS])

  function handleClickFlavour(flavour: string) {
    console.log(`You like the ${flavour} flavour eh?`)
  }

  function handlePrev() {
    setFlavours([...flavours.slice(1), flavours[0]])
  }

  function handleNext() {
    setFlavours([flavours[flavours.length - 1], ...flavours.slice(0, flavours.length - 1)])
  }

  return (
    <>
      <ul className={styles.listContainer}>
        <motion.button
          className={styles.leftButton}
          onClick={handlePrev}
          whileHover={{ scale: 1.05, cursor: 'pointer' }}
          whileTap={{ scale: 0.95 }}
        >
          <LeftIcon />
        </motion.button>
        {flavours.map((flavour, i) => {
          if (i > 3) return
          return (
            <li
              className={styles.itemContainer}
              key={i}
              onClick={() => {
                handleClickFlavour(flavour)
              }}
            >
              <motion.img
                whileHover={{ scale: 1.05, cursor: 'pointer' }}
                whileTap={{ scale: 0.95 }}
                alt={`Can of ${flavour}`}
                src={`../../assets/images/${flavour}.png`}
              />
            </li>
          )
        })}
        <motion.button
          className={styles.rightButton}
          onClick={handleNext}
          whileHover={{ scale: 1.05, cursor: 'pointer' }}
          whileTap={{ scale: 0.95 }}
        >
          <RightIcon />
        </motion.button>
      </ul>
      {/* <Swiper slidesPerView={1} loop={true} className={styles.sliderContainer}>
        {flavours.map((flavour, i) => {
          return (
            <SwiperSlide className={styles.itemContainer} key={i}>
              <img alt={`Can of ${flavour}`} src={`../../assets/images/${flavour}.png`} />
            </SwiperSlide>
          )
        })}
      </Swiper> */}
    </>
  )
}

export default FlavourCarousel
