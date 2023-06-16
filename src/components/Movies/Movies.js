import { useState } from 'react'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'

const Movies = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true)
  setTimeout(() => {
    setIsPreloaderVisible(false)
  }, 500)

  return (
    <>
      <Header loggedIn />
      <SearchForm />
      {isPreloaderVisible && <Preloader />}
      {!isPreloaderVisible && (
        <>
          <MoviesCardList />
          <Button />
        </>
      )}

      <Footer />
    </>
  )
}

export default Movies
