import styles from './LandingCanBackgroundTab.module.scss'
import { motion } from 'framer-motion'

interface LandingCanBackgroundTabProps {
  backgroundColor: string
  index: number
  hovered: boolean
  flavour: string
}

function LandingCanBackgroundTab({ backgroundColor, flavour, index, hovered }: LandingCanBackgroundTabProps) {
  const styling = {
    backgroundColor,
  }

  return (
    <>
      <div className={styles.can_tab_container}>
        <div style={styling} className={styles.can_tab_bar}></div>
        <div className={styles.can_tab_img_wrapper}>
          <motion.img
            alt={`Can of ${flavour}`}
            src={`../../assets/images/${flavour}.png`}
            key={index}
            animate={{ width: hovered ? '45px' : '40px', opacity: hovered ? 1 : 0.3 }}
            initial={{ width: '40px', opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />
        </div>
      </div>
    </>
  )
}
export default LandingCanBackgroundTab
