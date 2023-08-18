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

        <div className="Item">
          <i class="fa-regular fa-bell"></i>
        </div>

        <div className="Item">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
