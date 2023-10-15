import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ isShortMovies, searchAndFilterMovies, onFilterMovies }) {

  const [request, setRequest] = useState('');
  const [isQueryError, setisQueryError] = useState(false);
  const location = useLocation();

  function onSubmitUserForm(e) {
    e.preventDefault();
    if (request.trim().length === 0) {
      setisQueryError(true);
    } else {
      setisQueryError(false);
      searchAndFilterMovies(request);
    }
  }

  function handleChangeInputRequest(e) {
    setRequest(e.target.value);
  }

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const localRequest = localStorage.getItem('movieSearch');
      setRequest(localRequest);
    }
  }, [location]);

  return (
    <section>
      <form id="form" onSubmit={onSubmitUserForm} className="search-form">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          onChange={handleChangeInputRequest}
          value={request || ''}
          required
        />
        <button type="submit" className="search-form__submit app__button">
          Найти
        </button>
      
      </form>
      <FilterCheckbox
        isShortMovies={isShortMovies}
        onFilterMovies={onFilterMovies}
      />
       {isQueryError && (
        <span className="search__form-error">Нужно ввести ключевое слово</span>
      )}
    </section>
  );
}

export default SearchForm;
