import "./index.css"

const ProjectView =props=>{
    const {details}=props
    const {projectName,projectLink,description,image}=details
    return(
        <li className="project-item">
            <div className="project-details">
                <div className="project-details-container">
            <p className="project-name">{projectName}</p>
            <p className="description">{description}</p>
            <a href={projectLink} className="project-link" target="_blank" rel="noreferrer">View Project</a>
          </div>
          </div>
          <img src={image} alt="project" className="project-image"/>
          
        </li>
    )
}

export default ProjectView
