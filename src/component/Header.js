import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export function Header(){
    return (
        <header class = "header">
            <div class ="logo">
                <img src="../images/logo.png" alt="logo" height="100"/>
            </div>
            <div class = "company-name">
                <h1> Alikseer </h1>
            </div>
            <Router>
                <nav>
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="products.html" class="nav-link">Products</a>
                    {/* <a href="contact.html" class="nav-link">Contact Us</a> */}
                    <a href="login.html" class="nav-link">Login</a> 
                </nav>                
            </Router>
        </header>
    );
}

export default Header;