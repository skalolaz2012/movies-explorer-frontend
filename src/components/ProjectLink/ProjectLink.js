import './Project-link.css'

const ProjectLink = ({ link, text, icon }) => {
  return (
    <a className="link" href={link} target="_blank" rel="noreferrer">
      <p className="link__text">{text}</p>
      {icon !== false ? (
        <img className="link__icon" src={icon} alt="Стрелка" />
      ) : (
        ''
      )}
    </a>
  )
}

export default ProjectLink
