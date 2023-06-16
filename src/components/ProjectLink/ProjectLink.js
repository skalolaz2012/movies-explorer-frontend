import './Project-link.css'

const ProjectLink = ({ link, text, icon }) => {
  return (
    <a className="project-link" href={link} target="_blank">
      <p className="project-link__text">{text}</p>
      <img className="project-link__icon" src={icon} />
    </a>
  )
}

export default ProjectLink
