import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
// import productsData from '../data/products';

const ProductPage = () => {
  // Define state for the cart using useState hook
  const [cart, setCart] = useState(() => {
    // Retrieve saved cart from localStorage (this is for saving the cart when the page is left or reloaded) or initialize an empty array if not found
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes using useEffect hook to save it when refreshed or when leaving the mpage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    // Find the index of the existing item in the cart, if it exists already on the cart, (this will just ncrement quantity not add a duplicate)
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    // If the item exists in the cart, increase its quantity by 1; otherwise, add it to the cart with a quantity of 1
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    // Update the cart state with the updatedCart array
    setCart(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    // Create a copy of the current cart array
    const updatedCart = [...cart];

    // Find the index of the item to be removed based on its productId
    const existingItemIndex = updatedCart.findIndex(item => item.id === productId);

    // Check if the item exists in the cart
    if (existingItemIndex !== -1) {
      // If the quantity of the item is greater than 1, reduce it by 1
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        // If the quantity is 1, completely remove the item from the cart
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-page">
      {/* Render the header component */}
      <Header />

      {/* Table structure */}
      <table>
        <tr>
          <td>
            {/* Render the product list component and pass the addToCart function as a prop */}
            <ProductList addToCart={addToCart} />
          </td>
          <td style={{ verticalAlign: 'top' }}>
            {/* Render the cart component and pass the cart state and removeFromCart function as props */}
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </td>
        </tr>
      </table>

      {/* Render the footer component */}
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

//     return (
//         <div className="product-page">
//             <Header />
//             <table>
//                 <tbody>
//                     <tr>
//                         <td><ProductList data={product} addToCart={addToCart} /></td>
//                         <td style={{ verticalAlign: 'top' }}><Cart /></td>
//                     </tr>
//                 </tbody>
//             </table>
//             <Footer />
//         </div>
//     );
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
