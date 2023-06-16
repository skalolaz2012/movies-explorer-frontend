import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

const MoviesCard = ({ path }) => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation()
  const handleSaveClick = (e) => {
    setIsActive((current) => !current)
  }
  return (
    <li className="card">
      <a className="card__away-link" href="#" target="_blank">
        <img
          className="card__image"
          src={require(`../../images/${path}`)}
          alt="фотокарточка фильма"
        />
      </a>
      <div className="card__description">
        <div className="card__description-wrap">
          <h2 className="card__title">33 слова о дизайне</h2>
          {pathname === '/movies' ? (
            <button
              type="button"
              aria-label="Кнопка лайк карточки"
              className={`card__button ${
                isActive ? 'card__button_active' : ''
              }`}
              onClick={handleSaveClick}
            />
          ) : (
            <button
              type="button"
              aria-label="Кнопка дизлайк карточки"
              className="card__button-delete"
            />
          )}
        </div>
        <small className="card__duration">1ч42м</small>
      </div>
    </li>
  )
}

export default MoviesCard
