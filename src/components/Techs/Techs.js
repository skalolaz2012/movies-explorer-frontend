import ProjectTitle from '../ProjectTitle/ProjectTitle'
import './Techs.css'

const Techs = () => {
  return (
    <section className="techs">
      <ProjectTitle title="Технологии" />
      <h2 className="techs-title">7 технологий</h2>
      <p className="techs-description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs-list">
        <li className="techs-item">HTML</li>
        <li className="techs-item">CSS</li>
        <li className="techs-item">JS</li>
        <li className="techs-item">React</li>
        <li className="techs-item">Git</li>
        <li className="techs-item">Express.js</li>
        <li className="techs-item">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs
