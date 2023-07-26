import { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MainApi from '../../utils/MainApi'
import { BASE_URL, SHORT_TIMING } from '../../utils/constants'

const SavedMovies = () => {
  const [notFound, setNotFound] = useState(false)
  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem('savedMovies'))
  )

  const mainApi = new MainApi({
    url: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  useEffect(() => {
    getSavedMovies()
  }, [])

  async function getSavedMovies() {
    return mainApi
      .getMovies()
      .then((movies) => {
        setResult(movies)
        localStorage.setItem('savedMovies', JSON.stringify(movies))
      })
      .catch((err) => console.log(err))
  }

  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem('savedMovies'))
  )

  async function handleDeleteMovie(id) {
    return mainApi
      .deleteMovie(id)
      .then((res) => {
        const updatedFilteredMovies = savedMovies.filter(
          (movie) => movie._id !== id
        )
        setSavedMovies(updatedFilteredMovies)
        setResult(updatedFilteredMovies)
        updatedFilteredMovies.length === 0
          ? 
            localStorage.setItem('savedMovies', JSON.stringify([]))
          : localStorage.setItem(
              'savedMovies',
              JSON.stringify(updatedFilteredMovies)
            )
      })
      .catch((error) => console.log(error))
  }

  const handleSearch = (searchState) => {
    const { query, isShort } = searchState
    const searched = savedMovies.filter((movie) => {
      const searchedRU = movie.nameRU
        .toLowerCase()
        .includes(query.toLowerCase())
      const searchedEN = movie.nameEN
        .toLowerCase()
        .includes(query.toLowerCase())
      const isSearched = searchedRU || searchedEN
      const isShortFilm = movie.duration <= SHORT_TIMING
      if (isShort) {
        return isSearched && isShortFilm
      } else {
        return isSearched
      }
    })

    if (searched.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
    setResult(searched)
  }

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      {notFound && <p className="cards-error">Ничего не найдено</p>}
      <MoviesCardList
        isSaveMovies={true}
        isNeedMoreButton={false}
        movies={result}
        onDeleteMovie={handleDeleteMovie}
      />
    </main>
  )
}

export default SavedMovies
