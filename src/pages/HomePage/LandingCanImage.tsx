import { motion } from 'framer-motion'
import styles from './LandingCanImage.module.scss'
import { animationDuration } from './animation-config'
import { useEffect, useState } from 'react'

interface LandingCanImageProps {
  index: number
  flavour: string
  anyHovered: boolean
}

function LandingCanImage({ index, flavour, anyHovered }: LandingCanImageProps) {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)

  const initialTransition = {
    ease: 'easeOut',
    type: 'spring',
    mass: 10 * Math.random() + 0.2,
    damping: 28,
  }

  const duration = 0.2 * (Math.random() + 0.7) * animationDuration
  const afterLoadedTransition = { duration, ease: 'easeIn' }

  const imageVariants = {
    initial: { opacity: 0, y: -150 },
    onLoad: { opacity: 1, y: 0 },
    afterLoad: { opacity: anyHovered ? 0 : 1, y: anyHovered ? 50 : 0 },
  }

  useEffect(() => {
    setHasLoaded(true)
  }, [])

  return (
    <div className={styles.can_image_wrapper}>
      <motion.img
        height={350}
        alt={`Can of ${flavour}`}
        src={`../../assets/images/${flavour}.png`}
        key={index}
        variants={imageVariants}
        initial="initial"
        animate={hasLoaded ? 'afterLoad' : 'onLoad'}
        transition={hasLoaded ? afterLoadedTransition : initialTransition}
      />
    </div>
  )
}
export default LandingCanImage
