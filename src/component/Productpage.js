import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';


const ProductPage = () => {
  // Define state for the cart using useState hook
  const [cart, setCart] = useState(() => {
    // Retrieve saved cart from localStorage or initialize an empty array if not found
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes using useEffect hook
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    // If the item exists in the cart, increase its quantity by 1; otherwise, add it to the cart with a quantity of 1
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === productId);

    // If the item exists in the cart, reduce its quantity by 1; if quantity is 1, remove the item from the cart
    if (existingItemIndex !== -1) {
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tbody>
          <tr>
            <td><ProductList addToCart={addToCart}/></td>
            <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart}/></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default ProductPage;





// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Footer from './Footer';
// import Header from './Header';
// import ProductList from './ProductList';
// import Cart from './Cart';
// import { CartItem } from './CartItem';
// import ProductItem from './ProductItem';
// import product from '../data/products';




// const Productpage = (props) => {
//     const { id, name, price, image, description } = props.data
//     const [quantity, setQuantity] = useState(1);
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         if (props.data && props.cartItems) {
//           localStorage.setItem('cartItems', JSON.stringify(cartItems)); //Thing from alend
//             const existingItem = props.cartItems.find(item => item.id === props.data.id);
//             if (existingItem) {
//                 setQuantity(existingItem.quantity + 1);
//             }
//         }
//     }, [props.cartItems, props.data]);

//     const addToCart = (product) => {
//         console.log(`Item added to cart:', "${name}"`);
//         console.log(`Price: "${price}"`)
//         console.log(`id"${id}"`)
//         // Implement your addToCart functionality here
//     };

//     let totalPrice = 0;
//     for (const item of cartItems) {
//         totalPrice += item.price * item.quantity;
//     }

//     const removeItemFromCart = (id) => {
//         const updatedCartItems = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCartItems);
//     };

    // return (
    //     <div className="product-page">
    //         <Header />
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td><ProductList data={product} addToCart={addToCart} /></td>
    //                     <td style={{ verticalAlign: 'top' }}><Cart /></td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <Footer />
    //     </div>
    // );
// };

// Productpage.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         image: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//     }),
//     cartItems: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         quantity: PropTypes.number.isRequired,
//     })),
// };

// export default Productpage;
