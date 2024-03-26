import React from 'react';
import Homepage from './component/Homepage.js'
import logo from './logo.svg';
import './App.css';
import Productpage from './component/Productpage.js';
import product from './data/products.js';

function App() {
  return (
    <div>

      <Homepage />
      <Productpage />


    </div>
  );
}

export default App;
