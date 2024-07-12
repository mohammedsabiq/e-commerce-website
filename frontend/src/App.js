import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  console.log(localStorage.getItem("auth-token"));

  return (
    <div>
      <BrowserRouter>
        {localStorage.getItem("auth-token") ? <Navbar /> : <></>}
        <Routes>
          <Route
            path="/login"
            element={<LoginSignUp setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={
              localStorage.getItem("auth-token") ? (
                <Shop />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/mens"
            element={
              isAuthenticated ? (
                <ShopCategory banner={men_banner} category="men" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/womens"
            element={
              isAuthenticated ? (
                <ShopCategory banner={women_banner} category="women" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/kids"
            element={
              isAuthenticated ? (
                <ShopCategory banner={kid_banner} category="kid" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/product/:productId"
            element={isAuthenticated ? <Product /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
          />
        </Routes>
        {localStorage.getItem("auth-token") ? <Footer /> : <></>}
      </BrowserRouter>
    </div>
  );
}

export default App;
