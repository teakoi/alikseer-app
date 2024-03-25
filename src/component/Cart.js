// Cart.js
import React, { useContext } from 'react';
import product from '../data/products';
import { CartItem } from './CartItem';

const Cart = () => {
    const totalAmount = getTotalCartAmount()

    return (
        <div className="cart">
            <div>
                <h1>Shopping Cart</h1>
            </div>
            <div className="cartItems">
                {product.map((product) => {
                    if (cartItems[product.id] !== 0) //For each product, when id(quantity) is not 0. Where, Cart items is a thing that has key:value, id of item is actually the id, value is quantity of the id?
                    {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="totalAmount">
                    <p> Total \(\in cart): ${totalAmount}</p>
                </div>
            ) : (
                <p>Your cart is empty</p> //If the total amount is 0 then display this text
            )} 

            
        </div>
    );
};

export default Cart;

