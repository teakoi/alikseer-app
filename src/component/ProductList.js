import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addProductToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    fetch('/api/products')
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

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import ProductItem from './ProductItem';
// import product from '../data/products';
// import Productpage from './Productpage';
// import CartItem from './CartItem'; // Import CartItem

// const ProductList = (props) => {
//   const { addToCart } = props;

//     return (
//         <div className="ProductListContainer">
//             <p>product list.</p>
//             <div className="productsList">
                
//                 {product.map((productData) => (
//                     <ProductItem 
//                       key={productData.id} 
//                       data={productData} 
//                       addToCart={props.addToCart}/>
//                 ))}
//             </div>
//         </div>
//     );
// };

// ProductList.propTypes = {
//   addToCart: PropTypes.func.isRequired // Validate that addToCart is a function and is required
// };


// export default ProductList;
