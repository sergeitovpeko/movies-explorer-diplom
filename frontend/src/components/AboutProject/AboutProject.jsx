import "./AboutProject.css";

function AboutProject({ refProps }) {
  return (
    <section className="about-project" ref={refProps}>
      <h2 className="main__heading">О проекте</h2>
      <div className="about-project__table">
        <div>
          <h3 className="about-project__table-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__table-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__table-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__table-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__process">
        <p className="about-project__process-scale about-project__process-scale_green">
          1 неделя
        </p>
        <p className="about-project__process-scale">4 недели</p>
        <p className="about-project__process-text">Back-end</p>
        <p className="about-project__process-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
