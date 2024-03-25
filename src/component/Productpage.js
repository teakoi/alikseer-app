import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import productsData from '../data/products';


const Productpage = () => {
    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{ verticalAlign: 'top' }}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;

