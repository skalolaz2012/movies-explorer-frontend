import ProjectLink from '../ProjectLink/ProjectLink'
import './Footer.css'

const Footer = () => {
  const year = new Date()
  return (
    <footer className="footer">
      <h4 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__wrap">
        <p className="footer__copyright">&copy; {year.getFullYear()}</p>
        <nav className="footer__links">
          <ul className="footer__links-list">
            <li className="footer__links-item">
              <ProjectLink
                link="https://practicum.yandex.ru"
                text="Яндекс.Практикум"
                icon={false}
              />
            </li>
            <li className="footer__links-item">
              <ProjectLink
                link="https://github.com/skalolaz2012"
                text="Github"
                icon={false}
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
