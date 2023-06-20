import './ProjectTitle.css'

const ProjectTitle = ({ title }) => {
  return (
    <div className="app__head-container">
      <h2 className="app__title">{title}</h2>
    </div>
  )
}

export default ProjectTitle
