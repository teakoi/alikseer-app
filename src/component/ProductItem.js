import React, { useContext, useState } from 'react';
import { ProductContext } from "../context/ProductList-context";
import product from '../data/products';
import CartItem from './CartItem';

//TODO: onMouseEnter event to toggle description

const ProductItem = (props) => {
    const {id, name, price, image, description} = props.data;
    const{ addToCart, cartItems } = useContext(ProductContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <img src={image} width="350"/>
            <h3 className="product-name">{name}</h3>
            <p className="price">${price}</p>    
            <button className="add-to-cart-btn" onClick={() => addToCart(id)} >
                Add To Cart {cartItemAmount >0 && <>({cartItemAmount}) </>}
            </button>      
        </div>
    );
};

export default ProductItem;


