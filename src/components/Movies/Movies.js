import { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { moviesApi } from '../../utils/MoviesApi'
import MainApi from '../../utils/MainApi'
import { BASE_URL, SHORT_TIMING } from '../../utils/constants'

const Movies = ({ setSavedMovies, savedMovies, onLikeMovie }) => {
  const [allMovies, setAllMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const mainApi = new MainApi({
    url: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  useEffect(() => {
    getAllMovies()
    getSavedMovies()
  }, [])

  async function getAllMovies() {
    return moviesApi
      .getAllMovies()
      .then((res) => {
        setIsLoading(true)
        setAllMovies(res)
        setError(false)
      })
      .catch((err) => {
        setError(true)
        console.log(err)})
      .finally(() => setIsLoading(false))
  }

  async function getSavedMovies() {
    return mainApi
      .getMovies()
      .then((movies) => {
        setIsLoading(true)
        setSavedMovies(movies)
        localStorage.setItem('savedMovies', JSON.stringify(movies))
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const handleSearch = (searchState) => {
    localStorage.setItem('searchState', JSON.stringify(searchState))
    const { query, isShort } = searchState
    const searched = allMovies.filter((movie) => {
      const searchedRU = movie.nameRU
        .toLowerCase()
        .includes(query.toLowerCase())
      const searchedEN = movie.nameEN
        .toLowerCase()
        .includes(query.toLowerCase())
      const isSearched = searchedRU || searchedEN
      const isShortFilm = movie.duration <= SHORT_TIMING
      if (query && isShort) {
        return isSearched && isShortFilm
      } else if (!query) {
        return null
      } else {
        return isSearched
      }
    })
    if (!query) {
      setIsEmptyInput(true)
    } else {
      setIsEmptyInput(false)
    }
    if (query && searched.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
    setSearchedMovies(searched)
    localStorage.setItem('searchedMovies', JSON.stringify(searched))
  }

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  }, [savedMovies])

  const searchState = JSON.parse(localStorage.getItem('searchState')) || {}
  const query = searchState.query || ''
  const isShort = searchState.isShort || false

  return (
    <main>
      <SearchForm onSearch={handleSearch} query={query} checkbox={isShort} />
      {error && <p className="cards-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {isEmptyInput && <p className="cards-error">Нужно ввести ключевое слово</p>}
      {notFound && <p className="cards-error">Ничего не найдено</p>}
      {isLoading && <Preloader />}
      <>
        <MoviesCardList
          movies={
            JSON.parse(localStorage.getItem('searchedMovies')) || searchedMovies
          }
          savedMovies={savedMovies}
          isMoreBtn={true}
          onLikeMovie={onLikeMovie}
        />
      </>
    </main>
  )
}

export default Movies
