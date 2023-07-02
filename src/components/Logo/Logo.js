import { Link } from 'react-router-dom'
import logoPath from '../../images/logo.svg'
import './Logo.css'

function Logo(login) {
  return (
    <Link className="header-link" to="/">
      <img
        src={logoPath}
        alt="Логотип в виде полусмайлика"
        className={`header-link__logo ${
          login ? 'header-link__logo_type_login-media' : ''
        }`}
      />
    </Link>
  )
}

export default Logo
