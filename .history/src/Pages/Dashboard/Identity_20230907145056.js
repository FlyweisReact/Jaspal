/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Identity = () => {
  return (
    <div>
      <Navbar />

      <div className="container-width">
        <div class="page_title_account">Your account</div>

        <div className="identity-dashboard">
          <div className="left-container">
            <div className="account-links">
              <div className="links">
                <Link className="active" to="/identity">
                  <span className="link-item">
                    <i className="fa-solid fa-user"></i>
                    <span> Information </span>
                  </span>
                </Link>
                {/* <a class="" href="/address">
                  <span class="link-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span> Add Address </span>
                  </span>
                </a>
                <a class="" href="/order">
                  <span class="link-item">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span> Order History </span>
                  </span>
                </a>
                <a class="" href="/mywishlist">
                  <span class="link-item">
                    <i class="fa-solid fa-heart"></i>
                    <span> Wishlist </span>
                  </span>
                </a>
                <a href="#">
                  <span class="link-item">
                    <i class="fa-solid fa-power-off"></i>
                    <span>Sign out</span>
                  </span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="block_content-right">
              <div className="title_account_second">Your personal information</div>

              <div className="credit">
              <p>Credit balance</p>
              

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
