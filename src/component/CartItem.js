import React from 'react';
import products from '../data/products';

const CartItem = ({ item, removeProductFromCart, updateQuantity }) => {
  const product = products.find(product => product.id === item.id);

  if (!product) return null;

  return (
    <div className="cart-item">
      <img className="product-image" src={product.image} alt={product.name} width="200" />
      <div>
        <p className="product-name">{product.name}</p>
        <p className="price">Price: ${product.price}</p>
        <p className="quantity">Quantity: {item.quantity}</p>
        <p className="total-price">Total: ${product.price * item.quantity}</p>
        <button onClick={() => removeProductFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;



// import React from 'react';
// import PropTypes from 'prop-types';

// export const CartItem = (props) => {
//     const { id, name, price, image, description, quantity } = props.data;

//     return (
//         <div className="cartItem"> 
//             <img src={image} width="350" alt={name}/>
//             <div className="product-details">
//                 <h3 className="product-name">{name}</h3>
//                 <p className="price">${price}</p>  
//                 <p className="quantity">Quantity: {quantity}</p>
//                 <p className="total-price"> Total Price: ${price * quantity}</p>
//             </div>
//         </div>
//     );
// }

// CartItem.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         image: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         quantity: PropTypes.number.isRequired
//     }).isRequired
// };
