import './SearchForm.css'
import searchIconBg from '../../images/search_find.svg'

const SearchForm = () => {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <div className="search-form__content">
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__wrap">
          <div className="search-form__text-wrap">
            <label className="search-form__label" htmlFor="films" />
            <input
              id="films"
              className="search-form__input"
              type="text"
              name="search"
              placeholder="Фильм"
              required
            />
            <button className="search-form__submit" type="submit">
              <img
                src={searchIconBg}
                alt="лупа"
                className="search-form__submit-icon"
              />
            </button>
          </div>
          <div className="search-form__line" />
          <div className="search-form__checkbox-wrap">
            <label htmlFor="check-box">
              <input
                id="check-box"
                className="search-form__checkbox"
                type="checkbox"
                name="checkbox"
              />
              <span className="search-form__pseudo-checkbox"></span>
            </label>
            <span className="search-form__checkbox-text">Короткометражки</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
