
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import product from '../data/products';
import CartItem from './CartItem'; // Import CartItem

const ProductList = () => {
    return (
        <div className="ProductListContainer">
            <p>product list.</p>
            <div className="productsList">
                {" "}
                {product.map((product) => (
                    <ProductItem data={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
