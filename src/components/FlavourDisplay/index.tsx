import { useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'
import styles from './index.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

function FlavourDisplay() {
  const [currentFlavour, setCurrentFlavour] = useState(FLAVOURS[0])
  const [direction, setDirection] = useState(1)

  function handleClickFlavour(flavour: string) {
    setDirection(FLAVOURS.indexOf(flavour) - FLAVOURS.indexOf(currentFlavour))
    setCurrentFlavour(flavour)
  }

  return (
    <>
      <div className={styles.currentFlavourContainer}>
        <motion.img
          alt={`Can of ${currentFlavour}`}
          src={`../../assets/images/${currentFlavour}.png`}
          key={FLAVOURS.indexOf(currentFlavour)}
          initial={{ opacity: 0, width: '100%' }}
          animate={{ opacity: 1, width: '100%' }}
          exit={{ opacity: 0 }}
        />
      </div>

      <ul className={styles.listContainer}>
        {FLAVOURS.map((flavour, i) => {
          return (
            <li
              className={styles.itemContainer}
              key={i}
              onClick={() => {
                handleClickFlavour(flavour)
              }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                alt={`Can of ${flavour}`}
                src={`../../assets/images/${flavour}.png`}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FlavourDisplay
