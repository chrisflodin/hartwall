import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import HeroContext from '../../context/HeroContext'
import useResolutionSupported from '../../hooks/useResolutionSupported'
import { IHeroContext } from '../../types/HeroContext'
import Footer from './Footer'
import styling from './index.module.scss'
import NavBar from './Navbar'
import ResolutionNotSupported from './ResolutionNotSupported'

const { navStyle, footerStyle, contentStyle, mainStyle } = styling

interface LayoutProps {
  children: React.ReactElement[] | React.ReactElement
}

function Layout() {
  const { isLoggedIn }: IHeroContext = useContext(HeroContext)

  const resolutionSupported = useResolutionSupported(880)
  if (!resolutionSupported) return <ResolutionNotSupported />

  // if (!isLoggedIn) return <Login config={LoginConfig} />

  return (
    <>
      <NavBar />
      <main className={mainStyle}>
        <div className={contentStyle}>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
