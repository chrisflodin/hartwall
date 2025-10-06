import HeroContext from '../../../context/HeroContext'
import { useContext } from 'react'
import { IHeroContext } from '../../../types/HeroContext'
import { ProductType } from '../../../consts/types'
import BottleFooter from './BottleFooter'
import CanFooter from './CanFooter'
import styles from './index.module.scss'

function Footer() {
  const { productType }: IHeroContext = useContext(HeroContext)

  return (
    <>
      {productType === ProductType.BOTTLE ? <BottleFooter /> : <CanFooter />}
      <div className={styles.bottomFooter}>
        <p>Me virkistämme</p>
        <p>Suomea.</p>
      </div>
    </>
  )
}

export default Footer
