
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductList-context';
import productsData from '../data/products';

export const CartItem = (props) => {
    const {id, name, price, image, description} = props.data;
    const { cartItems = {}, removeFromCart } = useContext(ProductContext);
    return (
        <div className="cartItem"> 
            <img src={image} width="350"/>
            <h3 className="product-name">{name}</h3>
            <p className="price">${price}</p>   
            <button className="remove-btn" onClick={() => removeFromCart(id)}>Remove</button>

        </div>
    );
}
