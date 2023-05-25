import { HartwallLogo, YouTubeLogo } from '../../../components/SVGs/Logos'
import { SearchIcon } from '../../../components/SVGs/Icons'
import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

function Navbar() {
  let location = useLocation()

  const cx = classNames({
    [`${styles.navbarContainer}`]: true,
    [`${styles.homeLayout}`]: location && location.pathname === '/',
  })

  return (
    <nav className={cx}>
      <Link to="/">
        <HartwallLogo className={styles.smileysLogo} />
      </Link>
      <div className={styles.leftNav}>
        <SearchIcon />
      </div>
    </nav>
  )
}

export default Navbar
