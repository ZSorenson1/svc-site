import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Shows = () => {
    const [ shows, setShows ] = useState([])
    const [ loaded, setLoaded] = useState(false)
    useEffect(() =>{
        axios.get("http://localhost:8000/api/shows")
        .then(res=>setShows(res.data),
        setLoaded(true))
        .catch(err => console.log("Something went wrong", err))
    }, [])
    
    
    return (
        <div className="container">
            <table className="table">
                <tr>
                    <th>Venue</th>
                    <th>City</th>
                    <th>Date/Time</th>
                    <th>Price</th>
                </tr>
                {
                loaded && shows.map((show, i) => {
                    return (
                        <tr>
                            <td>{show.venue}</td>
                            <td>{show.city}</td>
                            <td>{new Intl.DateTimeFormat("en-US", {
                                    weekday: 'short',
                                    month: 'long', day: '2-digit',year: 'numeric',
                                    hour: 'numeric', minute: 'numeric',
                                }).format(new Date(show.date))}</td>
                            <td>{show.price}</td>
                        </tr>
                    )
                })
            }

            </table>
        </div>
    )
}

export default Shows;