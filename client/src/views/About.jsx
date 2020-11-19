import React, {useEffect, useState} from 'react'
import axios from 'axios'
const About = () => {
    const [ about, setAbout ] = useState([])
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/about")
        .then(res=>setAbout(res.data.about))
        .catch(err => console.log("Something went wrong", err))
    }, [])

    return (
        <div className="container">
            <h2 className="mt-4">Who are SVC?</h2>
            <div className="d-flex flex-row mt-5 justify-content-between">
                <div className="d-flex flex-column">
                    <h3>We are:</h3>
                    <div className="text-left">
                        <h4>N.C. Lightning (Vocals/Guitar/Keyboard)</h4>
                        <h4>Jon Serra (Guitar)</h4>
                        <h4>Chandler Haughton (Bass)</h4>
                        <h4>Charles Silva (Drums)</h4>
                    </div>
                </div>
                <div className="w-50">
                    <h3> About Us:</h3>
                    <p className="text-left">{about}</p>
                </div>
            </div>
        </div>
    )
}

export default About;