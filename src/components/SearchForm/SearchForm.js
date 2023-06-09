import searchIconBg from '../../images/search_find.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

const SearchForm = () => {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <section className="search-form">
      <form className="search-form__content" onSubmit={handleSubmit} noValidate>
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
          <FilterCheckbox />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
