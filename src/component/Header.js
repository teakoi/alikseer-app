import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from "./Productpage";
import Homepage from "./Homepage";

const Header= () =>{
    return (
        <header className= "header">
            <div className="logo">
                <img src="../images/logo.png" alt="logo" height="100"/>
            </div>
            <div className= "company-name">
                <h1> Alikseer </h1>
            </div>
            {/* I put routing in index.js, hope that's ok */}
            <nav>
                <Link to="/">Home</Link> {/*idk if this "/" will always work*/}
                <Link to="/Productpage">Products</Link>
                <Link to="/Loginpage">Login</Link>

            </nav>
        </header>
    );
}

export default Header;

// better practice is to have a navbar component but they didnt allow that