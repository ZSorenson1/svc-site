import React, { useEffect, useState} from 'react'
import axios from 'axios'

const AboutAdmin = () => {
    const [ about, setAbout ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    useEffect(() =>{
        axios.get("http://localhost:8000/api/about")
        .then(res=>setAbout(res.data.about),
        setLoaded(true))
        .catch(err => console.log("Something went wrong", err))
    }, [])

    const editAbout = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/about/edit", {about: about})
        .then(res=>setAbout(res.data.about))
        .catch(err => console.log("Something went wrong", err))
    }

    
    return (
        <div className="container">
            <h2>Edit About</h2>
            {loaded && 
            <form onSubmit={(e) => editAbout(e)}>
                <textarea className="aboutBox" name="about" value={about} onChange={e => setAbout(e.target.value)}/>
                <input type="submit"/>
            </form>
            }
        </div>
    )
}

export default AboutAdmin;