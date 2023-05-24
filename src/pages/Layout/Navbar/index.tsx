import { useContext, useState } from 'react'
import { HartwallLogo } from '../../../components/Logos/Logos'
import Input from '../../../components/Input'
import styles from './index.module.scss'
import { Button } from '../../../components/Button'
import AppContext from '../../../shared/AppContext'
import { IAppProvider } from '../../../types/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

function Navbar() {
  let location = useLocation()

  const cx = classNames({
    [`${styles.navbarContainer}`]: true,
    [`${styles.homeLayout}`]: location && location.pathname === '/'
  })

  return (
    <nav className={cx}>
      <Link to="/">
        <HartwallLogo color="black" className={styles.smileysLogo} />
      </Link>
    </nav>
  )
}

export default Navbar
