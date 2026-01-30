import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Profile.css'

const EditProfile = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        id: "",
        user: "",
        password: "",
        email: "",
        gender: ""
    })

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/users/${id}`)
                setProfile(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchProfile()
    }, [id])

    const { user, password, email, gender } = profile

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfile({ ...profile, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/users/${id}`,
                {
                    id,
                    user,
                    password,
                    email,
                    gender
                }
            )

            localStorage.setItem("loggedUser", JSON.stringify(res.data))

            alert("Updated Successfully ✅")
            navigate("/profile")
        } catch (err) {
            console.log("AXIOS ERROR:", err.response || err)
            alert("Update failed ❌")
        }
    }

    return (
        <div className="profile-container">
            <h2 className="profile-title">Edit Profile</h2>

            <form className="profile-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <label>Gender</label>
                <select
                    name="gender"
                    value={gender}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <button className="primary-btn" type="submit">
                    Update Profile
                </button>
            </form>
        </div>
    )

}

export default EditProfile
