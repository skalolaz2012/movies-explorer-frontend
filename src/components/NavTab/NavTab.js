import './NavTab.css'
import { AnchorLink } from 'react-anchor-navigation'

function NavTab() {
  return (
    <AnchorLink className="promo-button" href="#about">
      Узнать больше
    </AnchorLink>
  )
}

export default NavTab
