import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../CurrentUserContext/CurrentUserContext";
import useForm from "../../hooks/useForm";
import "./Profile.css";
import Header from "../Header/Header";
import { EMAIL_VALIDATION } from "../utils/constants";

function Profile({ loggedIn, signOut, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, isErrors, handleChangeInput, isFormValid, resetForm } =
    useForm();
  const [isLastData, setIsLastData] = useState(false);

  function onSubmitUserForm(event) {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastData(true);
    } else {
      setIsLastData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  return (
    <main>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          className="profile__form"
          id="form"
          onSubmit={onSubmitUserForm}
          noValidate
        >
          <label htmlFor="name" className="profile__label">
            Имя
            <input
              type="text"
              placeholder="Сергей"
              className="profile__input"
              name="name"
              id="name"
              required
              onChange={handleChangeInput}
              value={enteredValues.name || ""}
              minLength="2"
              maxLength="30"
            />
          </label>
          <label htmlFor="email" className="profile__label">
            E-mail
            <input
              type="text"
              placeholder="test@test.ru"
              className="profile__input"
              name="email"
              id="email"
              onChange={handleChangeInput}
              pattern={EMAIL_VALIDATION}
              value={enteredValues.email || ""}
              required
            />
          </label>
          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastData
                ? "profile__button-save auth-page__button-save_inactive"
                : "profile__button-save"
            }
          >
            Редактировать
          </button>
        </form>
        <button
          type="button"
          className="profile__link profile__link_red app__link"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
