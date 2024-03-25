
// ProductList.js
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';

const ProductList = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            // If item already exists in cart, increase quantity by 1
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            // If item doesn't exist in cart, add it with quantity 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
