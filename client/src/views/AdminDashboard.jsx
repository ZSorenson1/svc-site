import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import ShowsAdmin from '../components/ShowsAdmin'
import AboutAdmin from '../components/AboutAdmin'
const AdminDashboard = () => {
    const [ login, setLogin ] = useState(false);
    useEffect(() => {
            axios.get("http://localhost:8000/api/admin/all", {withCredentials: true})
            .then(res=>{console.log(res); setLogin(true)})
            .catch(err => navigate("/"))
        
    }, [])

    const logout = (e) => {
        axios.post("http://localhost:8000/api/admin/logout", {}, {withCredentials: true})
            .then(res=>navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div>
            {login && <>
            <a href="/" onClick={e => logout(e)}>logout</a>
            <ShowsAdmin />
            <AboutAdmin />
            </>
            }
        </div>
    )
}

export default AdminDashboard;