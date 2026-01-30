import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="simple-page">Cart is empty</div>;
  }

  const handleBuyNow = (item) => {
    navigate("/checkout", { state: { product: item } });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-grid">
        {cart.map((item, index) => (
          <div className="cart-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="anime-name">{item.anime}</p>
              <p className="description">{item.description}</p>
              <p className="price">₹{item.price}</p>
              <button
                className="buy-btn item-buy"
                onClick={() => handleBuyNow(item)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;