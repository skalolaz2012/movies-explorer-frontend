import ProjectLink from '../ProjectLink/ProjectLink'
import portfolioIcon from '../../images/link.svg'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <ProjectLink link="https://skalolaz2012.github.io/how-to-learn/" text="Статичный сайт" icon={portfolioIcon} />
        </li>
        <li className='portfolio__item'>
          <ProjectLink link="https://skalolaz2012.github.io/fourth-project/" text="Адаптивный сайт"  icon={portfolioIcon} />
        </li>
        <li className='portfolio__item'>
          <ProjectLink link="https://mesto-saperov.nomoredomains.monster/" text="Одностраничное приложение"  icon={portfolioIcon} />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio