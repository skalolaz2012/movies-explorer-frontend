import { useState } from 'react'
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
    <main>
      <SearchForm />
      {isPreloaderVisible && <Preloader />}
      {!isPreloaderVisible && (
        <>
          <MoviesCardList />
          <Button />
        </>
      )}
      <Footer />
    </main>
  )
}

export default Movies
