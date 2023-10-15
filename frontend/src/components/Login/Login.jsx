import "./Login.css";
import { useState } from "react";
import AuthForm from "../AuthPage/AuthPage";
import { EMAIL_VALIDATION } from "../utils/constants";
import useForm from "../../hooks/useForm";

function Login({ onAuthorization, isLoading }) {
  const { enteredValues, isErrors, handleChangeInput, isFormValid } = useForm();
  // Form submit function
  function onSubmitUserForm(event) {
    event.preventDefault();
    // Вызов функции onAuthorization с введенными значениями полей формы
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <main className="login">
      <AuthForm
        name="login"
        title="Рады видеть!"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        link="/signup"
        onSubmit={onSubmitUserForm}
        isDisabled={!isFormValid}
        isLoading={isLoading}
        noValidate
      >
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
            className="auth-page__form-input"
            placeholder="******"
            onChange={handleChangeInput}
            value={enteredValues.password || ""}
            required
            minLength="8"
            maxLength="14"
          />
          <span className="auth-page__error-text">{isErrors.password}</span>
        </label>
      </AuthForm>
    </main>
  );
}

export default Login;
