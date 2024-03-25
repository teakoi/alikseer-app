// CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    const { image, name, price, quantity } = item;

    return (
        <div className="cart-item">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: {price * quantity}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    );
};

export default CartItem;
