import React, { useState } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'

const AdminLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/admin/login", {username: username, password: password}, {withCredentials:true})
        .then( res => {console.log("Success!"); navigate('/admin/dashboard')})
        .catch(err => setError('Login info incorrect'))
    }

    return (
        <div>
            {error ? <p>{error}</p> : ''}
            <form action="" onSubmit={e => submitHandler(e)}>
                <p>Username:</p>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
                <p>Password:</p>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AdminLogin;