import { motion } from 'framer-motion'
import { ProductType } from '../../consts/types'
import styles from './LandingCanBackground.module.scss'

interface LandingCanBackgroundProps {
  backgroundColor: string
  index: number
  staticBackground?: boolean
  Background: React.FunctionComponent | React.ComponentClass | null
  productType: ProductType
}

function LandingCanBackground({
  backgroundColor,
  index,
  staticBackground,
  Background,
  productType,
}: LandingCanBackgroundProps) {
  const styling = {
    backgroundColor,
    opacity: productType === ProductType.CAN ? 1 : 0.8,
    width: '25%',
  }

  const initial = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  }

  return (
    <>
      <motion.div
        style={styling}
        className={`${styles.landing_can_container}` + (staticBackground ? ` ${styles.absolute}` : '')}
        initial={!staticBackground ? initial : {}}
      >
        {Background && <Background />}
      </motion.div>
    </>
  )
}
export default LandingCanBackground
