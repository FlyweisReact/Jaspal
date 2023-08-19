/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Navbar/Footer";
import Navbar from "./Navbar/Navbar";

// CSS
import "./CSS/Normal.css";
import "./CSS/Navbar.css";
import "./CSS/Footer.css";
import Copyright from "./Component/copyright/Copyright";
import ProductbyCategory from "./Pages/CategoryProduct/ProductbyCategory";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductbyCategory />} />
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
};

export default App;
