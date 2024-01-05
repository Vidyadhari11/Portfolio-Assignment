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
                    <div className="about-container">
                        <div className="about">
                            <div className="card-container">
                             <p className="ux">UI/UX DESIGNER</p>
                             <h1 className="about-name">Hello, My name is Vidyadhari Belagal</h1>
                             <p className="sub-heading">I'm currently learning fullstack development with a specialization in 4.0 technologies.I love with the coding challenges and hands on projects.
                             I developed static,responsive and dynamic webpages.
                             </p>
                             <div className="buttons-container">
                                <button type="button" className="button-primary">Projects</button>
                                <button type="button" className="button-secondary">Linkedin</button>
                             </div>
                             </div>
                        </div>
                        <div className="image-container">
                       <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704429999/image_bedqt0.png" className="logo" alt="profile"/>
                        </div>
                    </div>
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
/*<img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704380959/about_photo_ytqyn7.png" alt="about" className="logo"/>*/