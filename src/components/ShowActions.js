import React, { useState, useEffect } from "react"
import axios from "axios"

const ShowActions = ({projList}) => {
    const [actList, setActList] = useState([])
    console.log({projList})

    useEffect(() => {
        axios.get(`https://projects-list-app.herokuapp.com/api/actions/${projList.id}`)
        .then(res => {
            setActList(res.data)
        })
        .catch(err => {
            console.log("Error in Actions", err)
        })
    },[])

    return(
        <h2>We're in Actions</h2>

    )
}

export default ShowActions