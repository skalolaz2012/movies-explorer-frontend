import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import ProfilePath from '../../images/profile.svg'
import './Header.css'

function Header({ loggedOut, loggedIn, menuActive, setMenuActive }) {
  return (
    <>
      {loggedOut && (
        <header className="header header_type_logged-out">
          <Logo />
          <nav className="header__container header__container_type_logged-out">
            <Link
              className="header__auth header__auth_type_logged-out"
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="header__auth header__auth_type_logged-out header__auth_type_marked"
              to="/signin"
            >
              Войти
            </Link>
          </nav>
        </header>
      )}
      {loggedIn && (
        <header className="header header_type_logged-in">
          <Logo />
          <div className="burger-container">
            <button
              className="burger-container__btn"
              onClick={() => setMenuActive(!menuActive)}
            >
              <span className="burger-container__pic" />
            </button>
          </div>
          <nav className="header__container header__container_type_logged-in">
            <NavLink
              className={({ isActive }) =>
                `header__auth header__auth_type_logged-in ${
                  isActive ? 'header__auth_active' : ''
                }`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `header__auth header__auth_type_logged-in header__auth_type_saved ${
                  isActive ? 'header__auth_active' : ''
                }`
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `header__auth header__auth_type_logged-in header__auth_type_profile ${
                  isActive ? 'header__auth_active' : ''
                }`
              }
              to="/profile"
            >
              Аккаунт
              <img
                src={ProfilePath}
                alt="Иконка профиля"
                className="header__auth-icon"
              />
            </NavLink>
          </nav>
        </header>
      )}
    </>
  )
}

export default Header
