import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from '../App.js';


const ProductPage = () => {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const {authenticated} = useAuthContext();
  const navigate = useNavigate();
  //for navigating to login when not logged in
  useEffect(()=> {
    console.log("Authenticated:", authenticated)
    if (!authenticated){
        navigate(`/login`);
    }},[authenticated, navigate]);


  // Save cart to localStorage whenever it changes using useEffect hook
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addProductToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  };


  const removeProductFromCart = (productId) => {
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
            <td><ProductList addProductToCart={addProductToCart}/></td>
            <td style={{ verticalAlign: 'top' }}>
            <Cart cart={cart} removeProductFromCart={removeProductFromCart}/></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default ProductPage;




