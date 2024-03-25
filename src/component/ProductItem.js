import React, { useState } from 'react';
import product from '../data/products';
import CartItem from './CartItem';

//TODO: onMouseEnter event to toggle description

const ProductItem = (props) => {
    const {id, name, price, image, description} = props.data;
    return (
        <div className="product">
            <img src={image} width="350"/>
            <h3 className="product-name">{name}</h3>
            <p className="price">${price}</p>    
            <button className="add-to-cart-btn">Add To Cart</button>      
        </div>
    );
};

export default ProductItem;


