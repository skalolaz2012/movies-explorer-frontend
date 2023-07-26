import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ items, active, setActive }) => {
  return (
    <nav
      className={active ? 'menu menu__active' : 'menu'}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header" onClick={() => setActive(!active)} />
        <ul className="menu__list">
          {items.map((item) => (
            <li className="menu__item" key={item.value}>
              <NavLink
                className={({ isActive }) =>
                  `menu__link ${isActive ? 'menu__link_active' : ''}`
                }
                to={item.href}
                onClick={() => setActive(!active)}
              >
                {item.value}
              </NavLink>
              {item.icon && (
                <img
                  className="menu__item-icon"
                  src={item.icon}
                  alt="иконка профиля"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
