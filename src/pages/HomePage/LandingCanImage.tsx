import { motion } from 'framer-motion'
import styles from './LandingCanImage.module.scss'
import { useState } from 'react'
import { FLAVOURS } from '../../consts/flavours'

interface LandingCanImageProps {}

function LandingCanImage() {
  const [currentFlavour, setCurrentFlavour] = useState(FLAVOURS[0])
  const [isHovered, setIsHovered] = useState(false)

  const styling = {}

  return (
    <div className={styles.landingCanWrapper}>
      <motion.img
        alt={`Can of ${currentFlavour}`}
        src={`../../assets/images/${currentFlavour}.png`}
        key={FLAVOURS.indexOf(currentFlavour)}
        initial={{ opacity: 1 }}
      />
    </div>
  )
}
export default LandingCanImage
