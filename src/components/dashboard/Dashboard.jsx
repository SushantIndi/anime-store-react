import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("loggedUser"));

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedUser");
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome, {user?.user || "User"} 👋</h1>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <p className="dashboard-subtitle">
                Choose what you want to explore
            </p>

            <div className="category-grid">
                <div
                    className="category-card"
                    onClick={() => navigate("/product")}
                >
                    <h2>Anime Figures</h2>
                    <p>Collectibles & Action Figures</p>
                </div>

                <div
                    className="category-card"
                    onClick={() => navigate("/accessories")}
                >
                    <h2>Accessories</h2>
                    <p>Footwear, gaming replicas, and anime essentials</p>
                </div>

                <div
                    className="category-card"
                    onClick={() => navigate("/dress")}
                >
                    <h2>Dresses</h2>
                    <p>Cosplay & Anime outfits</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
