import './Project-link.css'

const ProjectLink = ({ link, text, icon }) => {
  return (
    <a className="app__link" href={link} target="_blank" rel="noreferrer">
      <p className="app__link-text">{text}</p>
      {icon !== false ? (
        <img className="app__link-icon" src={icon} alt="Стрелка" />
      ) : (
        ''
      )}
    </a>
  )
}

export default ProjectLink
