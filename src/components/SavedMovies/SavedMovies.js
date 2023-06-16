import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList'
import Footer from '../Footer/Footer'

const SavedMovies = () => {
  return (
    <>
      <Header loggedIn />
      <SearchForm />
      <SavedMoviesCardList />
      <Footer />
    </>
  )
}

export default SavedMovies