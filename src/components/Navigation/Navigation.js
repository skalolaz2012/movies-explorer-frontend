import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ items, lastItem, active, setActive }) => {
  return (
    <nav
      className={active ? 'menu menu__active' : 'menu'}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header" onClick={() => setActive(!active)} />
        <ul className="menu__list">
          <div className="menu__list-wrap">
            {items.map((item) => (
              <li className="menu__item">
                <NavLink
                  className={({ isActive }) =>
                    `menu__link ${isActive ? 'menu__link_active' : ''}`
                  }
                  to={item.href}
                  onClick={() => setActive(!active)}
                >
                  {item.value}
                </NavLink>
              </li>
            ))}
          </div>
          {
            <li className="menu__item menu__item_type_last">
              <NavLink
                className={({ isActive }) =>
                  `menu__link ${isActive ? 'menu__link_active' : ''}`
                }
                to={lastItem.href}
                onClick={() => setActive(!active)}
              >
                {lastItem.value}
              </NavLink>
              <img
                className="menu__item-icon"
                src={lastItem.icon}
                alt="иконка профиля"
              />
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
