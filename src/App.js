import React from 'react';
import Homepage from './component/Homepage.js'
import logo from './logo.svg';
import './App.css';
import Productpage from './component/Productpage.js';
import product from './data/products.js';
import LoginPage from './component/LoginPage.js';

function App() {
  return (
    <div>

      <Homepage />
      <Productpage />
      <LoginPage />


    </div>
  );
}

export default App;
