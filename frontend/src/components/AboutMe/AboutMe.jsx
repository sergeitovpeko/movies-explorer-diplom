import "./AboutMe.css";
import photo from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="main__heading">Студент</h2>
      <article className="about-me__info">
        <div className="about-me__info-text">
          <h3 className="about-me__info-title">Сергей Товпеко</h3>
          <p className="about-me__info-subtitle">
            Начинающий фронтендер
          </p>
          <p className="about-me__info-paragraph">
            Я родился во Владивостоке, сейчас живу в Москве.
            Хочу стать классным разработчиком и улучшать жизнь людей.
          </p>
          <a
            href="https://github.com/sergeitovpeko"
            className="about-me__info-link app__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фото выпускника ЯП Сергей Товпеко" className="about-me__photo" />
      </article>
    </section>
  );
}

export default AboutMe;
