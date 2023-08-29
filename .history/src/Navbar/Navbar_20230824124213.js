/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDashboard from "../Component/userDashboard/UserDashboard";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="Navbar">
        <Link to="/homepage">
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

            <div className="Item Item3" onClick={() => handleShow()}>
              <img src="/Image/3.png" alt="" />
              <p>Hi, AXY!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;