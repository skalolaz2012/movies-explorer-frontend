import ProjectTitle from '../ProjectTitle/ProjectTitle'
import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className="about-project">
      <ProjectTitle title="О проекте" />
      <div className="about-project__main">
        <ul className="about-project__steps">
          <li className="about-project__step">
            <h3 className="about-project__step-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__step-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__step">
            <h3 className="about-project__step-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__step-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="about-project__progress">
          <li className="about-project__progress-stage">
            <h3 className="about-project__progress-stage-title about-project__progress-stage-title_type_first">
              1 неделя
            </h3>
            <p className="about-project__progress-stage-description">
              Back-end
            </p>
          </li>
          <li className="about-project__progress-stage about-project__progress-stage_type_second">
            <h3 className="about-project__progress-stage-title about-project__progress-stage-title_type_second">
              4 недели
            </h3>
            <p className="about-project__progress-stage-description">
              Front-end
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutProject
