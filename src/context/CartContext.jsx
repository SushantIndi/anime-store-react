import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        alert("The product has been added successfully✅")
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
