/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">BRAND LOGO</div>

      <div className="container">
        <i className="fa-solid fa-bars"></i>

        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="Item Item1">
          <i class="fa-regular fa-bell"></i>
        </div>

        <div className="Item Item2">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
        </div>
        
        <div className="Item Item2">
        <img src='/Image/3.png' alt='' />
          <p>Hi, AXY!</p>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
