import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state || !state.product) {
        navigate("/cart");
        return null;
    }

    const { product } = state;

    return (
        <div className="checkout-page">
            <h2>Scan & Pay</h2>

            <div className="checkout-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
            </div>

            <img
                className="qr-image"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=yourupi@bank&pn=AnimeStore&am=${product.price}&cu=INR`}
                alt="QR Code"
            />

            <p className="note">Scan to complete payment</p>
        </div>
    );
};

export default Checkout;
