// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeItem, increaseQuantity }) => {
    // Ensure cartItems is an array
    if (!Array.isArray(cartItems)) {
        return <p>Cart is empty</p>; // Or handle the error appropriately
    }

    // Calculate total price
    let totalPrice = 0;
    for (const item of cartItems) {
        totalPrice += item.price * item.quantity;
    }

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item, index) => (
                <CartItem key={index} item={item} removeItem={removeItem} increaseQuantity={increaseQuantity} />
            ))}
            <h3>Total Price: {totalPrice}</h3>
        </div>
    );
};

export default Cart;

