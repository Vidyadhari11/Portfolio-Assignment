import Header from "../../components/Header"
import ProjectContext from "../../context/ProjectContext"

import "./index.css"

const About=()=>{
    return(
        <ProjectContext.Consumer>
        {value=>{
            const {addProject, changeProjectName,changeProjectLink,changeProjectDescription}=value
            const addProjectData=(event)=>{
                event.preventDefault()
                console.log("add")
                addProject()
            }

            const onChangeProjectName=(event)=>{
                 changeProjectName(event.target.value)
            }

            const onChangeProjectLink=(event)=>{
                changeProjectLink(event.target.value)
            }

            const onChangeProjectDescription=(event)=>{
                changeProjectDescription(event.target.value)
            }

            return(
                <div>
                    <Header/>
                   <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704380959/about_photo_ytqyn7.png" alt="about" className="logo"/>
                   <div className="project-container">
                   <h1 className="title">Add Project</h1>
                   <form className="form-container" onSubmit={addProjectData}>
                    <div className="label-input-container">
                        <label className="label" htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" className="input" onChange={onChangeProjectName}/>
                    </div>
                    <div className="label-input-container">
                        <label className="label" htmlFor="projectLink">Project Link</label>
                        <input type="text" id="projectLink" className="input" onChange={onChangeProjectLink}/>
                    </div>
                    <div className="label-input-container">
                        <label className="label" htmlFor="description">Description</label>
                        <textarea id="description" rows="3" cols="24" className="input" onChange={onChangeProjectDescription}></textarea>
                    </div>
                    <button className="button" type="submit">Add</button>
                   </form>
                   </div>
                 
                </div>
            )
        }}
    </ProjectContext.Consumer>
    )
    
 
}

export default About