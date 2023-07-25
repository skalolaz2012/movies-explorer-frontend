import { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { mainApi } from '../../utils/MainApi'
import { moviesApi } from '../../utils/MoviesApi'
import { SHORT_TIMING } from '../../utils/constants'

const Movies = ({ setSavedMovies, savedMovies, onLikeMovie }) => {
  const [allMovies, setAllMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [preloader, setPreloader] = useState(false)

  useEffect(() => {
    getAllMovies()
    getSavedMovies()
  }, [])

  async function getAllMovies() {
    return moviesApi
      .getAllMovies()
      .then((res) => {
        setPreloader(true)
        setAllMovies(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloader(false))
  }

  async function getSavedMovies() {
    return mainApi
      .getMovies()
      .then((res) => {
        setPreloader(true)
        setSavedMovies(res)
        localStorage.setItem('savedMovies', JSON.stringify(res))
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloader(false))
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
      {isEmptyInput && <p className="cards-error">Нужно ввести ключевое слово</p>}
      {notFound && <p className="cards-error">Ничего не найдено</p>}
      {preloader && <Preloader />}
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
