import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

const MoviesCardList = () => {
  const cards = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
  ]
  return (
    <section className="cards" aria-label="список фильмов">
      <ul className="cards-list">
        {cards.map((card, i) => (
          <MoviesCard path={card} key={i} />
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList
