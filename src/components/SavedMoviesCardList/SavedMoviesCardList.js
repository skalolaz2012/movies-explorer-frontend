import MoviesCard from '../MoviesCard/MoviesCard'
import '../MoviesCardList/MoviesCardList.css'

const SavedMoviesCardList = () => {
  const savedCards = ['1.png', '2.png', '3.png']
  return (
    <div className="cards">
      <ul className="cards-list">
        {savedCards.map((card) => (
          <MoviesCard path={card} />
        ))}
      </ul>
    </div>
  )
}

export default SavedMoviesCardList
