import './FilterCheckbox.css'

const FilterCheckbox = ({ checked, onChange }) => {
  return (
    <div className="filter-checkbox">
      <label htmlFor="check-box">
        <input
          id="check-box"
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="filter-checkbox__pseudo-checkbox"></span>
      </label>
      <span className="filter-checkbox__checkbox-text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox
