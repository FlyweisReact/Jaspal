/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Store } from 'react-notifications-component'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutHandler = () => {
    dispatch(LOGOUT())
    Store.addNotification({
      title: "",
      message: "Logged Out",
      type: "info",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate('/')
  }

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

            <div className="Item Item3" onClick={() => setShow(!show)}>
              <img src="/Image/3.png" alt="" />
              <p>Hi, AXY!</p>
            </div>
          </div>

          {show ? (
            <div className="user-dashboard">
              <div className="Heading-component">
                <p>Hi! AXY</p>
                <i className="fa-solid fa-x" onClick={() => setShow(false)} />
              </div>

              <div className="Items">
                <p>My Orders</p>
              </div>
              <div className="Items">
                <p>Password & Security</p>
              </div>
              <div className="Items">
                <p>Refer & Earn</p>
              </div>

              <div className="Items">
                <p>Notification</p>
              </div>

              <div className="Items">
                <p>Wishlist</p>
              </div>
              <div className="Items">
                <p>FAQs</p>
              </div>
              <div className="Items">
                <p>Report a Problem</p>
              </div>
              <div className="Items" onClick={() } >
                <p>Log Out</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
