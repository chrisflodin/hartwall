import { AnimatePresence, motion } from 'framer-motion'
import styles from './LandingCanDetails.module.scss'

interface LandingCanDetailsProps {
  flavour: string
  index: number
  hovered: boolean
  anyHovered: boolean
  text: {
    title: string
    description: string
  }
}

function LandingCanDetails({ flavour, index, hovered, anyHovered, text }: LandingCanDetailsProps) {
  const animate = { opacity: hovered ? 1 : 0, y: hovered ? 20 : 0 }
  const initial = { y: 0 }
  const exit = { opacity: 0 }
  const transition = { duration: anyHovered ? 0.3 : 0.3, delay: anyHovered ? 0.3 : 0, ease: 'easeOut' }

  return (
    <div className={styles.landing_can_detail_container}>
      <AnimatePresence>
        <motion.img
          className={styles.landing_can_large_image}
          alt={`Can of ${flavour}`}
          src={`../../assets/images/${flavour}.png`}
          height={450}
          key={index}
          animate={animate}
          initial={initial}
          exit={exit}
          transition={transition}
        />
        <motion.div
          className={styles.landing_can_detail_text_container}
          animate={animate}
          initial={initial}
          exit={exit}
          transition={transition}
        >
          <h1 className={styles.landing_can_detail_title}>{text.title}</h1>
          <p className={styles.landing_can_detail_description}>{text.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default LandingCanDetails
