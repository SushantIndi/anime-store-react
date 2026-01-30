import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    let navigate = useNavigate()

    let [state, setState] = useState({
        user: "",
        password: "",
    })

    let { user, password } = state

    let handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let response = await axios.get("http://localhost:5000/users")
            let users = response.data

            let matchedUser = users.find(
                (u) => u.user === user && u.password === password
            )

            if (matchedUser) {
                localStorage.setItem("isLoggedIn", "true")
                localStorage.setItem("loggedUser", JSON.stringify(matchedUser))

                alert("Login Successful ✅")
                navigate("/dashboard")
            } else {
                alert("Invalid Username or Password ❌")
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>USERNAME:</label>
                <input type="text" name="user" onChange={handleChange} required />

                <label>PASSWORD:</label>
                <input type="password" name="password" onChange={handleChange} required />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
