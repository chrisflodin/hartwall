import { motion } from 'framer-motion'
import styles from './LandingCanLargeImage.module.scss'

interface LandingCanLargeImageProps {
  flavour: string
  index: number
  hovered: boolean
  anyHovered: boolean
}

function LandingCanLargeImage({ flavour, index, hovered, anyHovered }: LandingCanLargeImageProps) {
  return (
    <>
      <motion.img
        className={styles.landing_can_large_image}
        alt={`Can of ${flavour}`}
        src={`../../assets/images/${flavour}.png`}
        key={index}
        animate={{ opacity: hovered ? 1 : 0, y: 20 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: anyHovered ? 0.6 : 0.3, delay: anyHovered ? 0.4 : 0 }}
        width={600}
      />
    </>
  )
}
export default LandingCanLargeImage
