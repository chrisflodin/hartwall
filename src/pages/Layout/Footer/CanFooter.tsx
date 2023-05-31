import styles from './CanFooter.module.scss'
import { FacebookLogo, InstagramLogo } from '../../../components/SVGs/Logos'
import { motion } from 'framer-motion'

function CanFooter() {
  return (
    <div className={styles.topFooter}>
      <h1>LIMONADI</h1>
      <div className={styles.socialMediaContainer}>
        <motion.div className={styles.blueCircle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <InstagramLogo />
        </motion.div>
        <motion.div className={styles.blueCircle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FacebookLogo />
        </motion.div>
      </div>
      <p>Nauti kylmänä hyvässä seurassa! </p>
      <img src="assets/images/FruityFooter.png" width={'100%'} className={styles.fruityImage} />
    </div>
  )
}

export default CanFooter
