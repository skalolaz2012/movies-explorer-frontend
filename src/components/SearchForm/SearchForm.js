import { useState } from 'react'
import searchIconBg from '../../images/search_find.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

const SearchForm = ({ onSearch, query, checkbox }) => {
  const [searchValue, setSearchValue] = useState(query || '')
  const [isSwitched, setSwitched] = useState(checkbox || false)

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const handleChangeCheckboxState = (e) => {
    setSwitched(e.target.checked)
    submitSettings(e.target.checked)
  }

  const submitSettings = (checked) => {
    const searchState = {
      query: searchValue,
      isShort: checked,
    }
    onSearch(searchState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitSettings(isSwitched)
  }

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
              value={searchValue}
              onChange={handleChangeSearchValue}
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
          <FilterCheckbox
            checked={isSwitched}
            onChange={handleChangeCheckboxState}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
