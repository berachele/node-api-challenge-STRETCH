import React, {useEffect} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const ProjectList = ({projList, setProjList}) => {
    const {push} = useHistory()

    useEffect(() => {
        axios.get('https://projects-list-app.herokuapp.com/api/projects')
        .then(res => {
          console.log({res})
          setProjList(res.data)
        })
        .catch(err => {
          console.log({err})
        })
      },[])

    console.log({projList})

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