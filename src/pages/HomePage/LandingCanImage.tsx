import { motion } from 'framer-motion'
import styles from './LandingCanImage.module.scss'

interface LandingCanImageProps {
  backgroundColor: string
  index: number
  hovered: boolean
  flavour: string
  anyHovered: boolean
}

function LandingCanImage({ backgroundColor, index, hovered, flavour, anyHovered }: LandingCanImageProps) {
  return (
    <div className={styles.can_image_wrapper}>
      <motion.img
        alt={`Can of ${flavour}`}
        src={`../../assets/images/${flavour}.png`}
        key={index}
        initial={{ opacity: 1 }}
        animate={{ opacity: anyHovered ? 0 : 1, y: anyHovered ? 50 : 0 }}
        transition={{ duration: 0.2 * (Math.random() + 0.7), ease: 'easeIn' }}
      />
    </div>
  )
}
export default LandingCanImage
