import MoviesCard from '../MoviesCard/MoviesCard'
import Button from '../Button/Button'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  SCREEN_MIDDLE,
  SCREEN_LARGE,
  MOVIES_SMALL,
  MOVIES_SMALL_TO_ADD,
  MOVIES_MIDDLE,
  MOVIES_LARGE,
  MOVIES_LARGE_TO_ADD,
} from '../../utils/constants'
import './MoviesCardList.css'

const MoviesCardList = ({
  movies,
  isMoreBtn,
  savedMovies,
  onLikeMovie,
  onDeleteMovie,
}) => {
  const { pathname } = useLocation()
  const [moviesRendered, setMoviesRendered] = useState(MOVIES_LARGE)
  const displayWidth = window.innerWidth

  useEffect(() => {
    let timeoutOfResize
    const handleResize = () => {
      clearTimeout(timeoutOfResize)
      timeoutOfResize = setTimeout(() => {
        let visibleMovies
        if (displayWidth < SCREEN_MIDDLE) {
          visibleMovies = MOVIES_SMALL
        } else if (displayWidth >= SCREEN_LARGE) {
          visibleMovies = MOVIES_LARGE
        } else {
          visibleMovies = MOVIES_MIDDLE
        }
        setMoviesRendered(visibleMovies)
      }, 500)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timeoutOfResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMoreBtn = () => {
    if (displayWidth < SCREEN_LARGE) {
      setMoviesRendered(
        (prevMoviesRendered) => prevMoviesRendered + MOVIES_SMALL_TO_ADD
      )
    } else {
      setMoviesRendered(
        (prevMoviesRendered) => prevMoviesRendered + MOVIES_LARGE_TO_ADD
      )
    }
  }

  const moviesToRender = movies.slice(0, moviesRendered)

  return (
    <section className="cards" aria-label="список фильмов">
      <ul className="cards-list">
        {pathname !== '/saved-movies'
          ? moviesToRender.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                savedMovies={savedMovies}
                onLikeMovie={onLikeMovie}
              />
            ))
          : movies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
      </ul>
      {isMoreBtn && movies.length > moviesRendered && (
        <Button onClick={handleMoreBtn} />
      )}
    </section>
  )
}

export default MoviesCardList
