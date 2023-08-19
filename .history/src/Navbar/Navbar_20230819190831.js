/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
    <Link to='/homepage'>
    <div className="logo">BRAND LOGO</div>
    </Link>
      
      <div className="container">
        <i className="fa-solid fa-bars"></i>

        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="Right-Container">
          <div className="Item Item1">
            <i class="fa-regular fa-bell"></i>
          </div>

          <Link to="/cart">
            <div className="Item Item2">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
            </div>
          </Link>

          <div className="Item Item3">
            <img src="/Image/3.png" alt="" />
            <p>Hi, AXY!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
