import './ProjectTitle.css'

const ProjectTitle = ({ title }) => {
  return (
    <div className="project__head-container">
      <h2 className="project__title">{title}</h2>
    </div>
  )
}

export default ProjectTitle
