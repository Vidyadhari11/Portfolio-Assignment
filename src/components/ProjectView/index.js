import "./index.css"

const ProjectView =props=>{
    const {details}=props
    const {projectName,projectLink,description}=details
    return(
        <li className="project-item">
            <div className="project-details">
                <div className="project-details-container">
            <p className="project-name">{projectName}</p>
            <p className="description">{description}</p>
            <a href={projectLink} className="project-link">View Project</a>
          </div>
          </div>
          <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704380959/about_photo_ytqyn7.png" alt="project" className="project-image"/>
          
        </li>
    )
}

export default ProjectView