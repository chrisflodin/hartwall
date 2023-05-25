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
  })

  return (
    <nav className={cx}>
      <div className={styles.sideNav}>
        <p className={styles.link}>Joumat</p>
        <p className={styles.link}>Yritis</p>
        <p className={styles.link}>Vastuulisuus</p>
        <p className={styles.link}>Inspiroidu</p>
      </div>
      <Link to="/">
        <HartwallLogo className={styles.hartwallLogo} />
      </Link>
      <div className={styles.sideNav}>
        <p className={styles.link}>Ota yhteyttä</p>
        <p className={styles.link}>Ammattiliasille</p>
        <p className={styles.link}>Export</p>
        <SearchIcon />
      </div>
    </nav>
  )
}

export default Navbar
