import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = ({ items, active, setActive }) => {
  return (
    <div className={active ? "menu menu__active" : "menu"} onClick={() => setActive(false)}>
      <div className="blur" />
      <div className="menu__content" onClick={e => e.stopPropagation()}>
        <div className="menu__header" onClick={() => setActive(!active)} />
        <ul className="menu__list">
          {items.map((item) => (
            <li className="menu__item">
              <NavLink className={({ isActive }) =>
                `menu__link ${
                  isActive ? 'menu__link_active' : ''
                }`
              } to={item.href} onClick={() => setActive(!active)}>
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
