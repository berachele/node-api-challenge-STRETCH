import React from "react"
import { useHistory } from "react-router-dom"

const ProjectList = ({projList, setProjList}) => {
    const {push} = useHistory()

    return(
        <header className="App-header">
        <h1>My Projects</h1>
        <div>
          {projList && projList.map(showProj => {
            return(
              <div>
                <p>Name: <br/>{showProj.name}</p><br/>
                <p>Description: <br/>{showProj.description}</p>
                <button onClick={() => push(`${showProj.id}/actions`)}>See Project Details</button>
              </div>
            )
          })}
        </div>
      </header>
    )
}

export default ProjectList