import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../assets/Product.json";
import { CartContext } from "../../context/CartContext";
import "./product.css";

const Product = () => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedUser");
        navigate("/");
    };

    return (
        <div className="product-container">

            <ul className="sub-nav">
                <li>All Products</li>
                <li style={{ marginLeft: "auto" }}>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </li>
            </ul>

            <div className="page-content">
                <div className="product-grid">
                    {products.map((item) => (
                        <div className="product-card" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="anime-name">{item.anime}</p>
                            <p className="description">{item.description}</p>
                            <p className="price">₹{item.price}</p>

                            <button onClick={() => addToCart(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;