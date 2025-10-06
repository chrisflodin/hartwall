import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import HeroContext from '../../context/HeroContext'
import { IHeroContext } from '../../types/HeroContext'
import styles from './LandingCanImage.module.scss'
import { animationDuration } from './animation-config'

interface LandingCanImageProps {
  index: number
  flavour: string
}

function LandingCanImage({ index, flavour }: LandingCanImageProps) {
  const { productMap }: IHeroContext = useContext(HeroContext)
  const product = productMap.get(index)
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
    afterLoad: { opacity: 1, y: 0 },
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
      <Button
        size="large"
        buttonColor="green"
        style={{
          marginTop: '30px',
          width: 200,
          borderRadius: '12px',
          background: 'white',
          color: '#231e87',
          fontWeight: 'bold',
          fontSize: '1.8rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 8px 25px rgba(48, 254, 179, 0.3)',
          border: '2px solid #231e87',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => {
          // Fun click animation
          const button = e.currentTarget
          button.style.transform = 'translateY(-2px) scale(0.95)'
          setTimeout(() => {
            button.style.transform = 'translateY(-5px) scale(1.05)'
          }, 100)

          // TODO: Implement buy now functionality
          console.log(`Buy now clicked for ${product?.text?.title || flavour}`)
        }}
        onMouseEnter={(e) => {
          const button = e.currentTarget
          button.style.transform = 'translateY(-5px) scale(1.05)'
          button.style.boxShadow = '0 12px 35px rgba(48, 254, 179, 0.5)'
        }}
        onMouseLeave={(e) => {
          const button = e.currentTarget
          button.style.transform = 'translateY(0) scale(1)'
          button.style.boxShadow = '0 8px 25px rgba(48, 254, 179, 0.3)'
        }}
      >
        🛒 Buy Now
      </Button>
    </div>
  )
}
export default LandingCanImage
