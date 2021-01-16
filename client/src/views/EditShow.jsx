import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowForm from '../components/ShowForm'
import { navigate }from '@reach/router'

const EditShow = props => {
    const {id} = props
    const [ show, setShow ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    const [ login, setLogin ] = useState(false);
    useEffect(() =>{
        axios.get("http://localhost:8000/api/shows/"+id)
        .then(res=>setShow(res.data), setLoaded(true))
        .catch(err => console.log("Something went wrong", err))

        axios.get("http://localhost:8000/api/admin/all", {withCredentials: true})
            .then(res=>setLogin(true))
            .catch(err => navigate("/"))
    }, [id])

    const editShow = (show) => {
        axios.put("http://localhost:8000/api/shows/"+id+"/edit", show)
        .then(res=>console.log(res.data))
        .catch(err => console.log("Something went wrong", err))
    }

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/admin/logout", {withCredentials: true})
            .then(res=>navigate('/'))
            .catch(err => console.log(err))
    }

    const backHandler = (e) => {
        e.preventDefault();
        navigate('/admin/dashboard')
    }
    
    return (
        <div className="container">
            <a href="/" onClick={e => logout(e)}>logout</a> | <a href="/" onClick={e => backHandler(e)}>back</a>
            {loaded && login &&
            
            <ShowForm onSubmitProp={editShow} initShow={show} />}
            {console.log(show)}
        </div>
    )
}

export default EditShow;