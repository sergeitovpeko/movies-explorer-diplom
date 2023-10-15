import React from "react";
import "./Header.css";
import { useLocation, NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import account from "../../images/icon__COLOR_icon-main.svg";
import menu from "../../images/icon__COLOR_icon-main(1).svg";
import logo from "../../images/logo.svg";
import Sidebar from "../Sidebar/Sidebar";

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false);

  // Changing the active button
  const setActiveButton = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button";

  // Menu opening
  function handleOpen() {
    setIsClicked(true);
  }

  // Menu closing
  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__button-wrapper">
            <Link to="/signup" className="header__button header__button-shadow">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header header_white" id="header_white">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__button-wrapper header__button-wrapper_films">
            <NavLink to="/movies" className={setActiveButton}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={setActiveButton}>
              Сохраненные фильмы
            </NavLink>
          </div>
          <div className="header__button-wrapper">
            <Link to="/profile" className="header__account-button">
              <div className="header__account-image-wrapper">
                <span className="header__account-text">Аккаунт</span>
                <img
                  className="header__account-image"
                  src={account}
                  alt="аккаунт"
                />
              </div>
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="menu" />
            </button>
          </div>
          {isClicked ? <Sidebar handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
