import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="main__heading">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item app__button">
            <a
              href="https://practicum.yandex.ru/blog/zachem-nuzhen-html/"
              target="_blank"
              rel="noreferrer"
              className="techs__list-link"
            >
              HTML
            </a>
          </li>
          <li className="techs__list-item app__button">
            <a
              href="https://practicum.yandex.ru/blog/chto-takoe-css/"
              target="_blank"
              rel="noreferrer"
              className="techs__list-link"
            >
              CSS
            </a>
          </li>
          <li className="techs__list-item app__button">
            <a
              href="https://practicum.yandex.ru/blog/chto-takoe-javascript-zachem-nuzhen/"
              target="_blank"
              rel="noreferrer"
              className="techs__list-link"
            >
              JS
            </a>
          </li>
          <li className="techs__list-item app__button">
            <a
              href="https://react.dev/"
              className="techs__list-link"
            >
              React
            </a>
          </li>
          <li className="techs__list-item app__button">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="techs__list-link"
            >
              Git
            </a>
          </li>
          <li className="techs__list-item app__button">
            <a
              href="https://expressjs.com/ru/"
              target="_blank"
              rel="noreferrer"
              className="techs__list-link"
            >
              Express.js
            </a>
          </li>
          <li className="techs__list-item app__button">
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer"
              className="techs__list-link"
            >
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
