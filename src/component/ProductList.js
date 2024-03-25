
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import product from '../data/products';
import CartItem from './CartItem'; // Import CartItem

const ProductList = ({ product, handleAddToCart}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItemIndex = CartItem.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            // If item already exists in cart, increase quantity by 1
            const updatedCartItems = [...CartItem];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            // If item doesn't exist in cart, add it with quantity 1
            setCartItems([...CartItem, { ...product, quantity: 1 }]);
        }
        console.log('Added to cart:', product);
    };


    return (
        <div className="product-list">
            {product.map(product => (
                <ProductItem key={product.id} product={product} handleAddToCart={handleAddToCart} CartItem={CartItem} />
            ))}
        </div>
    );
};

export default ProductList;
