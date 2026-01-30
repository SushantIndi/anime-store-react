import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "../components/layout/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Dashboard from "../components/dashboard/Dashboard";
import Product from "../components/shop/Product";
import Accessories from "../components/shop/Accessories";
import Dress from "../components/shop/Dress";
import Cart from "../components/shop/Cart";
import Checkout from "../components/shop/Checkout";
import Profile from "../components/profile/Profile";
import EditProfile from "../components/profile/EditProfile";
import CartProvider from "../context/CartContext";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: (
          <div className="home-content">
            <h1 className="home-title">Welcome to Anime Store</h1>

            <div className="auth-actions">
              <Link to="/login" className="auth-btn login-btn">
                Login
              </Link>

              <Link to="/register" className="auth-btn register-btn">
                Register
              </Link>
            </div>
          </div>
        )
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "accessories",
        element: <Accessories />
      },
      {
        path: "dress",
        element: <Dress />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
      {
        path: "profile/edit/:id",
        element: (
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        )
      }


    ]

  }
])

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  )
}

export default App