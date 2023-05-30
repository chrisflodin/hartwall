import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import styling from './index.module.scss'
import NavBar from './Navbar'
import useResolutionSupported from '../../hooks/useResolutionSupported'
import ResolutionNotSupported from './ResolutionNotSupported'

const { navStyle, footerStyle, contentStyle, mainStyle } = styling

interface LayoutProps {
  children: React.ReactElement[] | React.ReactElement
}

function Layout() {
  const resolutionSupported = useResolutionSupported(880)
  if (!resolutionSupported) return <ResolutionNotSupported />
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
