import React from 'react';
import Homepage from './component/Homepage.js'
import logo from './logo.svg';
import './App.css';
import { ProductListContextProvider } from './context/ProductList-context.js';
import Productpage from './component/Productpage.js';

function App() {
  return (
    <div>
      <ProductListContextProvider>
        <Homepage />
        <Productpage />
      </ProductListContextProvider>
      {/* gotta remove context later */}
    </div>
  );
}

export default App;
