import './FilterCheckbox.css'

const FilterCheckbox = () => {
  return (
    <div className="filter-checkbox">
      <label htmlFor="check-box">
        <input
          id="check-box"
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
        />
        <span className="filter-checkbox__pseudo-checkbox"></span>
      </label>
      <span className="filter-checkbox__checkbox-text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox
