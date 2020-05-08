import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
const [projList, setProjList] = useState([])
const [project, setProject] = useState({
  name: "",
  description: "",
  complete: false
})

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Projects</h1>
        <div>
          {projList && projList.map(showProj => {
            return(
              <div>
                <p>Name: <br/>{showProj.name}</p><br/>
                <p>Description: <br/>{showProj.description}</p>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
