
import React, { useContext } from 'react';
import productsData from '../data/products';

export const CartItem = (props) => {
    const {id, name, price, image, description} = props.data;
    return (
        <div className="cartItem"> 
            <img src={image} width="350"/>
            <h3 className="product-name">{name}</h3>
            <p className="price">${price}</p>   

        </div>
    );
}
