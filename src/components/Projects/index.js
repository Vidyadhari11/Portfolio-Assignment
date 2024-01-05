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
                        <div className="project-items">
                            <div className="project-details">
                                <div className="project-details-container">
                            <p className="project-name">NxtTrendz</p>
                            <p className="description">Nxttrendz is an e-commerce application where an authorized user can acesss a safe and secure shopping.Developed a cutting-edge e-commerce platforms inspired by Amazon and Flipcart. </p>
                            <a href="https://bvidyanxttrendz.ccbp.tech" className="project-link" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        </div>
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="project" className="project-image"/>
                        
                        </div>
                        <div className="project-items">
                            <div className="project-details">
                                <div className="project-details-container">
                            <p className="project-name">TodoList</p>
                            <p className="description">A comprehensive todo management tool designed to enhance productivity.TodoList is a dynamic responsive pahe where a user can keep track of their daily life activitiles.</p>
                            <a href="https://bvidyadhari.ccbp.tech" className="project-link" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        </div>
                        <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704432040/todolist_image_jdzkts.png" alt="project" className="project-image"/>
                        
                        </div>
                        <div className="project-items">
                            <div className="project-details">
                                <div className="project-details-container">
                            <p className="project-name">Jobby App</p>
                            <p className="description">Developed a comprehensive job search solution.Designed pages for home,login,jobs ,job details with react router and local storage.</p>
                            <a href="https://vidyajobbyapp.ccbp.tech" className="project-link" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        </div>
                        <img src="https://play-lh.googleusercontent.com/upf8416oJbcTFZcTjz9o1IkjWcaC2F7guH545fz8eKMpUO0C4QUqD0WLngO04WKvrVY" alt="project" className="project-image"/>
                        
                        </div>
                        
                            <ul className="projects-list-container">
                            {projectsList.map(each=>(
                                <ProjectView key={each.id} details={each}/>
                            ))}
                        </ul>
                        <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704435138/Screenshot_47_ng901e.png" className="footer-img" alt="footer"/>
      
                    </div>

                </div>
            )
        }}
       </ProjectContext.Consumer>
    )
}

export default Projects