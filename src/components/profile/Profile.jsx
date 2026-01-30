import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("loggedUser")
        navigate("/")
    }

    const user = JSON.parse(localStorage.getItem("loggedUser"))

    if (!user) {
        return <h2>Please login to view profile</h2>
    }

    return (
        <div className="profile-container">
            <h1 className="profile-title">👤 Profile</h1>

            <div className="profile-card">
                <p><strong>Username:</strong> {user.user}</p>
                <p><strong>Email:</strong> {user.email}</p>

                <Link to={`/profile/edit/${user.id}`}>
                    <button className="primary-btn">Edit Profile</button>
                </Link>

                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Profile
