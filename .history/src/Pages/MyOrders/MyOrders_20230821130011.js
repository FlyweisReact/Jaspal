/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";

const MyOrders = () => {
  return (
    <>
      <Navbar />
      <div className="my-orders">
        <div className="Heading-Cont">
          <p>Order List</p>
          <div className="search-box">
            <input type="search" placeholder="Search Orders" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="Order-List">
            <div className="">

            </div>
        </div>


      </div>
    </>
  );
};

export default MyOrders;
