import { ProductType } from '../../consts/types'
import styles from './LandingCanBackgroundTab.module.scss'
import { motion } from 'framer-motion'

interface LandingCanBackgroundTabProps {
  backgroundColor: string
  index: number
  hovered: boolean
  flavour: string
  productType: ProductType
}

function LandingCanBackgroundTab({
  backgroundColor,
  flavour,
  index,
  hovered,
  productType,
}: LandingCanBackgroundTabProps) {
  const styling = {
    backgroundColor,
  }

  const productBaseWidth = productType === ProductType.CAN ? 40 : 12
  const productWidth = hovered ? productBaseWidth * 1.125 : productBaseWidth

  return (
    <>
      <div className={styles.can_tab_container}>
        <div style={styling} className={styles.can_tab_bar}></div>
        <div className={styles.can_tab_img_wrapper}>
          <motion.img
            alt={`Can of ${flavour}`}
            src={`../../assets/images/${flavour}.png`}
            key={index}
            animate={{ width: productWidth, opacity: hovered ? 1 : 0.3 }}
            initial={{ width: productBaseWidth, opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />
        </div>
      </div>
    </>
  )
}
export default LandingCanBackgroundTab
