import "./FilterCheckbox.css";

function FilterCheckbox({ onFilterMovies, isShortMovies }) {
  return (
    <div className="filter-checkbox">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="filter-checkbox__input app__button"
        onChange={onFilterMovies}
        checked={isShortMovies}
      />
      <label htmlFor="checkbox" className="filter-checkbox__text app__button">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
