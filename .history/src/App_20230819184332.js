/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";
import ProductbyCategory from "./Pages/CategoryProduct/ProductbyCategory";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";

// CSS
import "./CSS/Normal.css";
import "./CSS/Navbar.css";
import "./CSS/Footer.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductbyCategory />} />
          <Route path="/product/:id/:name" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-address" element={<S}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
