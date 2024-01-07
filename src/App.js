import {Component} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProjectContext from "./context/ProjectContext"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import About from "./components/About"
import {v4 as uuidv4} from "uuid"
import './App.css';

class App extends Component{
  state={projectsList:[],projectName:"",projectLink:"",description:"",image:"https://res.cloudinary.com/dtoiozo4f/image/upload/v1704429999/image_bedqt0.png"}
  
  addProject=()=>{
   const {projectName,projectLink,description,image}=this.state
   const project={
    id:uuidv4(),
    projectName,
    projectLink,
    description,image
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

  changeImage=value=>{
    this.setState({image:value})
  }

  render(){
    const {projectLink,projectName,description,projectsList,image}=this.state
    return (
     
      <ProjectContext.Provider value={{addProject:this.addProject,changeImage:this.changeImage,image,projectsList,description,projectName,projectLink,changeProjectDescription:this.changeProjectDescription,changeProjectName:this.changeProjectName,changeProjectLink:this.changeProjectLink}}>
      
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




    