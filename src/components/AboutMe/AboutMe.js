import ProjectTitle from '../ProjectTitle/ProjectTitle'
import portrait from '../../images/portrait.jpg'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about-me">
      <ProjectTitle title="Студент" />
      <div className="about-me__content">
        <div className="about-me__wrap">
          <div className="about-me__top-wrap">
            <h2 className="about-me__title">Сергей</h2>
            <h3 className="about-me__subtitle">Фулстек-разработчик, 33 года</h3>
            <p className="about-me__description">
              Я родился и живу в Магнитогорске, закончил факультет автоматики и
              вычислительной техники МГТУ, немного позднее ещё магистратуру
              института энергетики и автоматики. У меня замечательная семья,
              старшая дочь и новорождённый сын. Я люблю слушать музыку, а ещё
              увлекаюсь автоспортом. Попытки кодить начал в 2019, с рождением
              дочери. С 2013 года работал ведущим инженером на Магнитогорском
              молочном комбинате. В 2021 году ввиду творческих разногласий решил
              расширить кругозор, уволился и в 2022 году начал обучение в Яндекс
              Практикуме.
            </p>
          </div>
          <a
            className="about-me__link"
            href="https://github.com/skalolaz2012"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={portrait} alt="Моё фото" />
      </div>
    </section>
  )
}

export default AboutMe
