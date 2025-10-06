import { HartwallLogo, InstagramLogo, TikTokLogo, TwitterLogo, YouTubeLogo } from '../../../components/SVGs/Logos'
import styling from './FooterSocialLinks.module.scss'
import footerStyling from './index.module.scss'

const { footerTextStyling } = footerStyling
const { container, socialLinksContainerStyling, elementMargin } = styling

function FooterSocialLinks() {
  return (
    <div className={`${container} ${elementMargin}`}>
      <div className={elementMargin}>
        <HartwallLogo />
      </div>
      <div className={`${socialLinksContainerStyling} ${elementMargin}`}>
        <TwitterLogo />
        <InstagramLogo />
        <YouTubeLogo />
        <TikTokLogo />
      </div>
    </div>
  )
}

export default FooterSocialLinks
