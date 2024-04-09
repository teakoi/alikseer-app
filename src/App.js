
import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Homepage from './component/Homepage.js';
import ProductPage from './component/Productpage.js';
import LoginPage from './component/LoginPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return(
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;