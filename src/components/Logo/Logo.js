import { Link } from 'react-router-dom'
import logoPath from '../../images/logo.svg'
import './Logo.css'

function Logo( login ) {
  return (
    <Link className="header__link" to="/">
      <img
        src={logoPath}
        alt="Логотип в виде полусмайлика"
        className={`header__logo ${login ? 'header__logo_type_login-media' : ''}`}
      />
    </Link>
  )
}

export default Logo
