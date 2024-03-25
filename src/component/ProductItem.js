import React, { useState } from 'react';
import product from '../data/products';
import CartItem from './CartItem';

const ProductItem = ({ product, handleAddToCart, CartItem }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };


    return (
        <div className="product-item" onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {showDescription && <p>{product.description}</p>}
            <p>Price: {product.price}</p>
            <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
            <CartItem />
        </div>
    );
};

export default ProductItem;