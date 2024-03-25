
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import product from '../data/products';
import { ProductListContextProvider } from '../context/ProductList-context.js';
import CartItem from './CartItem'; // Import CartItem

const ProductList = () => {
    return (
        <ProductListContextProvider>
            <div className="ProductListContainer">
                <p>product list.</p>
                <div className="productsList">
                    {" "}
                    {product.map((product) => (
                        <ProductItem data={product} />
                    ))}
                </div>
            </div>
        </ProductListContextProvider>
    );
};

export default ProductList;
