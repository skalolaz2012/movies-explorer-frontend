import MoviesCard from '../MoviesCard/MoviesCard'
import '../MoviesCardList/MoviesCardList.css'

const SavedMoviesCardList = () => {
  const savedCards = ['1.png', '2.png', '3.png']
  return (
    <section className="cards" aria-label="список сохраненных фильмов">
      <ul className="cards-list">
        {savedCards.map((card) => (
          <MoviesCard path={card} />
        ))}
      </ul>
    </section>
  )
}

export default SavedMoviesCardList
