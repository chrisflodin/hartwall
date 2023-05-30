import { AnimatePresence, motion } from 'framer-motion'
import styles from './LandingCanDetails.module.scss'
import { animationDuration } from './animation-config'
import { ProductType } from '../../consts/types'

interface LandingCanDetailsProps {
  flavour: string
  index: number
  hovered: boolean
  anyHovered: boolean
  text: {
    title: string
    description: string
  }
  productType: ProductType
}

const duration = 0.3 * animationDuration

function LandingCanDetails({ flavour, index, hovered, anyHovered, text, productType }: LandingCanDetailsProps) {
  const animate = { opacity: hovered ? 1 : 0, y: hovered ? 20 : 0 }
  const initial = { opacity: 0 }
  const exit = { opacity: 0 }
  const transition = { duration: anyHovered ? duration : duration, delay: anyHovered ? duration : 0, ease: 'easeOut' }

  const detailContainerStyle = {
    color: productType === ProductType.CAN ? '#231e87' : 'white',
  }

  return (
    <div style={detailContainerStyle} className={styles.landing_can_detail_container}>
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
