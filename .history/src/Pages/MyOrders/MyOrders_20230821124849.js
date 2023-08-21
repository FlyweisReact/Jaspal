/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";

const MyOrders = () => {
  return (
    <>
      <Navbar />
      <div className="my-orders">
        <p>Order List</p>
        <div className="search-box">
          <input type="search" placeholder="Search Orders" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
