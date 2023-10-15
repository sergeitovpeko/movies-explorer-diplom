import "./AuthPage.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm({
  linkText,
  link,
  children,
  title,
  buttonText,
  question,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <section className="auth-page">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth-page__logo" />
      </Link>
      <h1 className="auth-page__greeting">{title}</h1>
      <form
        className="auth-page__form"
        id="form"
        onSubmit={onSubmit}
        noValidate
      >
        {children}

        <button
          className={
            isDisabled || isLoading
              ? "auth-page__button-save auth-page__button-save_inactive"
              : "auth-page__button-save"
          }
          type="submit"
          disabled={isDisabled ? true : false}
        >
          {buttonText}
        </button>
      </form>
      <p className="auth-page__paragraph">
        {question}
        <Link className="auth-page__link app__link" to={link}>
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default AuthForm;
