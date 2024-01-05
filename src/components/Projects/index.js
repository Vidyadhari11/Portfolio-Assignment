import Header from "../../components/Header"
import ProjectContext from "../../context/ProjectContext"
import ProjectView from "../../components/ProjectView"
import "./index.css"

const Projects=()=>{
    return(
       <ProjectContext.Consumer>
        {value=>{
            const {projectsList}=value
            console.log(projectsList)

            return(
                <div>
                    <Header/>
                    <div className="projects-container">
                        <h1 className="project-title">Projects</h1>
                        {projectsList.length===0?(
                           <p className="no-projects">No projects</p>
                        ):(
                            <ul className="projects-list-container">
                            {projectsList.map(each=>(
                                <ProjectView key={each.id} details={each}/>
                            ))}
                        </ul>
                        )}
                    </div>

                </div>
            )
        }}
       </ProjectContext.Consumer>
    )
}

export default Projects