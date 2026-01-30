import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    const [state, setState] = useState({
        user: "",
        password: "",
        email: "",
        gender: ""
    })

    const { user, password, email, gender } = state

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const payload = { user, password, email, gender }
            await axios.post("https://anime-store-backend.onrender.com/users", payload)

            alert("Registration Successful")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='register-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                <h2>Register</h2>

                <label>USERNAME:</label>
                <input type="text" name="user" onChange={handleChange} />

                <label>EMAIL:</label>
                <input type="email" name="email" onChange={handleChange} />

                <label>PASSWORD:</label>
                <input type="password" name="password" onChange={handleChange} />

                <label>Gender:</label>
                <div className="gender-group">
                    <label>
                        <input type="radio" value="Male" name="gender" onChange={handleChange} />
                        Male
                    </label>
                    <label>
                        <input type="radio" value="Female" name="gender" onChange={handleChange} />
                        Female
                    </label>
                </div>

                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register
