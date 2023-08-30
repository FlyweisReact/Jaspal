/** @format */

import React from "react";
import { Link } from 'react-router-dom'

const Notification = () => {
  return (
    <div className="user-dashboard">
      <div className="Heading-component">
        <p>Hi! AXY</p>
        <i className="fa-solid fa-x" />
      </div>

      <Link to="/my-order">
        <div className="Items">
          <p>My Orders</p>
        </div>
      </Link>

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
    </div>
  );
};

export default Notification;
