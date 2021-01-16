import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import ShowForm from './ShowForm'

const ShowsAdmin = () => {
    const [ shows, setShows ] = useState([])
    const [ loaded, setLoaded] = useState(false)
    useEffect(() =>{
        axios.get("http://localhost:8000/api/shows")
        .then(res=>setShows(res.data),
        setLoaded(true))
        .catch(err => console.log("Something went wrong", err))
    }, [])

    const addShow = (show) => {
        axios.post("http://localhost:8000/api/shows/new", show)
        .then(res=>setShows([...shows, res.data]))
        .catch(err => console.log("Something went wrong", err))
    }

    const deleteShow = (e, id) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/shows/"+id+"/delete")
        .then(res=> console.log(res),
        setLoaded(true))
        .catch(err => console.log("Something went wrong", err))
        
        setShows(shows.filter(show => show._id != id));
    }

    const clickHandler = (e, id) => {
        e.preventDefault();
        navigate('/admin/shows/'+id);
    }

    return (
        <div className="container">
            <h2>Update Shows</h2>
            <ShowForm onSubmitProp={addShow} initShow={{venue: "", city: "", date: "", price: ""  }}/>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Venue</th>
                        <th>City</th>
                        <th>Date/Time</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    {
                    loaded && shows.map((show, i) => {
                        return (
                            <tr key={i}>
                                <td>{show.venue}</td>
                                <td>{show.city}</td>
                                <td>{new Intl.DateTimeFormat("en-US", {
                                    weekday: 'short',
                                    month: 'long', day: '2-digit',year: 'numeric',
                                    hour: 'numeric', minute: 'numeric',
                                }).format(new Date(show.date))}</td>
                                <td>{show.price}</td>
                                <td><a href="/" onClick={e => clickHandler(e, show._id)} name="edit">edit</a> |<a href="/" onClick={e => deleteShow(e, show._id)}>delete</a></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ShowsAdmin;