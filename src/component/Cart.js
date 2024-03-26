import React from 'react';
import CartItem from './CartItem';

 const Cart = ({ cart, removeProductFromCart, updateQuantity }) => {
    const calculateTotal = () => {
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        return totalAmount.toFixed(2); // Round to 2 decimal places
      };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeProductFromCart={removeProductFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
      <p>Total (in cart): ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;








// import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import product from '../data/products';
// import { CartItem } from './CartItem';

// const Cart = (props) => {
//     // Extract props
//     const { cartItems, onRemove } = props;

//     return (
//         <div className="cart">
//             <div>
//                 <h1>Shopping Cart</h1>
//             </div>
//             <div>
//                 {/* Render Cart component and pass cartItems as a prop */}
//                 <Cart cartItems={cartItems} />
//             </div>
//         </div>
//     );
// };

// // Props validation
// Cart.propTypes = {
//     cartItems: PropTypes.array.isRequired, // Validate that cartItems is an array and is required
//     onRemove: PropTypes.func.isRequired // Validate that onRemove is a function and is required
// };

// export default Cart;
