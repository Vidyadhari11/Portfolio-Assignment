import React from "react"

const ProjectContext =React.createContext({
    projectsList:[],
    addProject:()=>{},
    projectName:"",
    projectLink:"",
    description:"",
    changeProjectName:()=>{},
    changeProjectLink:()=>{},
    changeProjectDescription:()=>{}
})

export default ProjectContext