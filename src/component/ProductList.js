import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addProductToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    fetch('http://127.0.0.1:5000/api/products')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch products');
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);



  return (
    <div className="product-list">

      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          addProductToCart={addProductToCart} />
          
      ))}
    </div>
  );
};

export default ProductList;


