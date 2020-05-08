import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import ProjectList from "./components/ProjectList"
import ShowActions from "./components/ShowActions"

function App() {
const [projList, setProjList] = useState([])
const [project, setProject] = useState({
  name: "",
  description: "",
  complete: false
})

  return (
    <Router>
      <div className="App">
        <Route exact path ="/" render={props => <ProjectList {...props} projList={projList} setProjList={setProjList}/>} />
        <Route path ="/:id/actions" component={ShowActions}/>
    </div>
    </Router>
  );
}

export default App;
