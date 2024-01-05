import {Component} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProjectContext from "./context/ProjectContext"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import About from "./components/About"
import {v4 as uuidv4} from "uuid"
// import { FaLinkedin } from 'react-icons/fa';
import './App.css';

class App extends Component{
  state={projectsList:[],projectName:"",projectLink:"",description:""}
  
  addProject=()=>{
   const {projectName,projectLink,description}=this.state
   const project={
    id:uuidv4(),
    projectName,
    projectLink,
    description
   }
   this.setState(prevState=>({projectsList:[...prevState.projectsList,project]}))
  }

  changeProjectName=value=>{
    this.setState({projectName:value})
  }


  changeProjectLink=value=>{
    this.setState({projectLink:value})
  }

  changeProjectDescription=value=>{
    this.setState({description:value})
  }

  render(){
    const {projectLink,projectName,description,projectsList}=this.state
    return (
     
      <ProjectContext.Provider value={{addProject:this.addProject,projectsList,description,projectName,projectLink,changeProjectDescription:this.changeProjectDescription,changeProjectName:this.changeProjectName,changeProjectLink:this.changeProjectLink}}>
      
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
        
      </ProjectContext.Provider>
       
      
    );
  }
}

export default App;




    