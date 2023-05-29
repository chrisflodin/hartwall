import styles from './index.module.scss'
import { FacebookLogo, InstagramLogo } from '../../../components/SVGs/Logos'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <>
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
        <p>Tarjoile jäähdytettynä seurajuomana! </p>
        <img src="assets/images/FruityFooter.png" width={'100%'} className={styles.fruityImage} />
      </div>
      <div className={styles.bottomFooter}>
        <p>Me virkistämme</p>
        <p>Suomea.</p>
      </div>
    </>
  )
}

export default Footer
