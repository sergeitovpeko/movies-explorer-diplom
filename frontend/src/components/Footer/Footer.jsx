import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ isVisible }) {
  if (!isVisible) {
    return null;
  }
  return (
    <footer className="footer">
      <h2 className="footer__heading">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__date">&#169; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li>
            <Link
              to="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              className="footer__link app__link"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/sergeitovpeko"
              target="_blank"
              rel="noreferrer"
              className="footer__link app__link"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
