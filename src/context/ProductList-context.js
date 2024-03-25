'use client';

import React, { createContext, useState } from 'react'
import product from '../data/products';

//Context allows you to create a state that can be accessed from 
//any file in the site
export const ProductContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {}
    for(let i =1; i<product.length + 1;i++){
        cart[i] = 0
    }
    return cart
}; //Makes an array of items going in cart, collects their ids too?

//All the logic is going in here, idk if thats what they want tho :(
export const ProductListContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = product.find((product) => product.id === Number(item));
                //tutorial used find instead of like get attribute or such?
                totalAmount += cartItems[item]* itemInfo.price
                //cartItems[item] is the quantity of that item in the cart
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        //^when you add another of the same item to cart, take the previous id (which is quantity ig?) and +1
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        //^same thing as addToCart but now we - 1
    };

    const contextValue = { 
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount };

    console.log(cartItems);
    return (<ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>);
};

