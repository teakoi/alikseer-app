import React, { useState } from 'react';

const ProductItem = ({ product }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const addToCart = () => {
        // Implement the logic to add the product to the cart
        console.log('Added to cart:', product);
    };

    return (
        <div className="product-item" onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {showDescription && <p>{product.description}</p>}
            <p>Price: {product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;