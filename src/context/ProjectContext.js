import React from "react"

const ProjectContext =React.createContext({
    projectsList:[],
    addProject:()=>{},
    projectName:"",
    projectLink:"",
    description:"",
    image:null,
    changeProjectName:()=>{},
    changeProjectLink:()=>{},
    changeProjectDescription:()=>{},
    changeImage:()=>{}
})

export default ProjectContext