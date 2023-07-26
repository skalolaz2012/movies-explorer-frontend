import { useLocation } from 'react-router-dom'
import { NOMOREPARTIES_IMG_URL } from '../../utils/constants'
import './MoviesCard.css'

const MoviesCard = ({ savedMovies, onLikeMovie, onDeleteMovie, movie }) => {
  const { pathname } = useLocation()
  const savedMovie = savedMovies
    ? savedMovies.find((item) => item.movieId === movie.id)
    : ''
  const isLiked = savedMovies
    ? savedMovies.some((item) => item.movieId === movie.id)
    : false

  const changeTimeLayout = (time) => {
    if (Math.floor(time / 60) > 0) {
      return `${Math.floor(time / 60)}ч ${time % 60}м`
    } else {
      return `${time % 60}м`
    }
  }

  return (
    <li className="card">
      <a className="card__away-link" href={movie.trailerLink} target="_blank">
        {pathname === '/movies' ? (
          <img
            className="card__image"
            src={`${NOMOREPARTIES_IMG_URL}${movie.image.url}`}
            alt={`фотокарточка фильма ${movie.nameRU}`}
          />
        ) : (
          <img
            className="card__image"
            src={movie.image}
            alt={`фотокарточка фильма ${movie.nameRU}`}
          />
        )}
      </a>
      <div className="card__description">
        <div className="card__description-wrap">
          <h2 className="card__title">{movie.nameRU}</h2>
          {pathname === '/movies' ? (
            <button
              type="button"
              aria-label="Кнопка лайк карточки"
              onClick={() => onLikeMovie(movie, isLiked, savedMovie?._id)}
              className={`card__button ${isLiked ? 'card__button_active' : ''}`}
            />
          ) : (
            <button
              type="button"
              aria-label="Кнопка дизлайк карточки"
              className="card__button-delete"
              onClick={() => onDeleteMovie(movie._id)}
            />
          )}
        </div>
        <small className="card__duration">
          {changeTimeLayout(movie.duration)}
        </small>
      </div>
    </li>
  )
}

export default MoviesCard
