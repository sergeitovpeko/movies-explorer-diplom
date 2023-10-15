import React from "react";
import "../AuthPage/AuthPage.css";
import { EMAIL_VALIDATION } from "../utils/constants";
import useForm from "../../hooks/useForm";
import AuthForm from "../AuthPage/AuthPage";

function Register({ isLoading, onRegister }) {
  const { enteredValues, isErrors, handleChangeInput, isFormValid } = useForm();

  function onSubmitUserForm(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }
  return (
    <main className="register">
      <AuthForm
        name="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkText="Войти"
        link="/signin"
        onSubmit={onSubmitUserForm}
        isDisabled={!isFormValid}
        isLoading={isLoading}
      >
        <label htmlFor="name" className="auth-page__form-label">
          Имя
          <input
            type="text"
            className="auth-page__form-input"
            name="name"
            id="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            onChange={handleChangeInput}
            value={enteredValues.name || ""}
            required
          />
          <span className="auth-page__error-text">{isErrors.name}</span>
        </label>
        <label htmlFor="email" className="auth-page__form-label">
          E-mail
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            className="auth-page__form-input"
            onChange={handleChangeInput}
            pattern={EMAIL_VALIDATION}
            value={enteredValues.email || ""}
            required
          />
          <span className="auth-page__error-text">{isErrors.email}</span>
        </label>
        <label htmlFor="password" className="auth-page__form-label">
          Пароль
          <input
            type="password"
            name="password"
            id="password"
            className="auth-page__form-input auth-page__form-input_error"
            placeholder="**************"
            onChange={handleChangeInput}
            value={enteredValues.password || ""}
            minLength="6"
            maxLength="12"
            required
          />
          <span className="auth-page__error-text">{isErrors.password}</span>
        </label>
      </AuthForm>
    </main>
  );
}

export default Register;
