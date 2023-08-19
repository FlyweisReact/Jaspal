/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";

// CSS
import "./CSS/Normal.css";
import "./CSS/Navbar.css";
import "./CSS/Footer.css";
import ProductbyCategory from "./Pages/CategoryProduct/ProductbyCategory";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductbyCategory />} />
          <Route path="/product/:id/:name" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
