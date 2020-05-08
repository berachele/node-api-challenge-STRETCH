import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import ProjectList from "./components/ProjectList"
import ShowActions from "./components/ShowActions"
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
    setProjList(res.data)
  })
  .catch(err => {
    console.log({err})
  })
},[])

  return (
    <Router>
      <div className="App">
        <Route exact path ="/" render={props => <ProjectList {...props} projList={projList} setProjList={setProjList}/>} />
        <Route path ="/:id/actions" render={props => <ShowActions {...props} projList={projList}/>}/>
    </div>
    </Router>
  );
}

export default App;
