import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = ({ addProductToCart }) => {
  return (
    <div className="product-list">

      {productsData.map((product) => (
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
