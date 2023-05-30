import styles from './BottleFooter.module.scss'
import { FacebookLogo, InstagramLogo } from '../../../components/SVGs/Logos'
import { motion } from 'framer-motion'
import { BottleMap } from '../../../consts/bottleMap'

function BottleFooter() {
  let bottleMapKeys = Array.from(BottleMap.keys())

  return (
    <>
      <div className={styles.topFooter}>
        <img src="assets/images/ginger_joe_logo.png" className={styles.logo} />
        <div className={styles.socialMediaContainer}>
          <motion.div className={styles.circle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <InstagramLogo />
          </motion.div>
        </div>
        <h1>IHASTU INKIVÄÄRIN LIEKKEIHIN</h1>
        <p>Poimi reseptit ja inspiroidu inkivääristä </p>
        <img src="assets/images/GingerFooter.png" width={'100%'} className={styles.backgroundImage} />
        <div className={styles.bottleContainer}>
          {bottleMapKeys &&
            bottleMapKeys.map((i) => {
              return (
                <img
                  className={styles.bottle}
                  alt={`${i}: Can of ${BottleMap.get(i)?.flavour}`}
                  src={`../../assets/images/${BottleMap.get(i)?.flavour}.png`}
                  height={200}
                />
              )
            })}
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <p>Me virkistämme</p>
        <p>Suomea.</p>
      </div>
    </>
  )
}

export default BottleFooter
