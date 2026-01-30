import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";

const Home = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"))

    return (
        <div className='app-container'>
            <ul className='nav-bar'>
                <li>
                    <Link to="/">
                        <IoMdHome className="nav-icon" />
                        Home Page
                    </Link>
                </li>

                <li>
                    <Link to="dashboard">
                        <AiFillProduct className="nav-icon" />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="cart">
                        <FaShoppingCart className="nav-icon" />
                        Cart Page
                    </Link>
                </li>

                {user && (
                    <li className="nav-user">
                        <Link to="profile">
                            👤 {user.user}
                        </Link>
                    </li>
                )}

            </ul>

            <div className='page-content'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home
