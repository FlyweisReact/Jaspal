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
          <div class="left-container">
            <div class="account-links">
              <div class="links">
                <Link class="active" href="/identity">
                  <span class="link-item">
                    <i class="fa-solid fa-user"></i>
                    <span> Information </span>
                  </span>
                </a>
                <a class="" href="/address">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
