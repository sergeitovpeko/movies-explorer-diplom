import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__link app__link" to={-1}>
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
