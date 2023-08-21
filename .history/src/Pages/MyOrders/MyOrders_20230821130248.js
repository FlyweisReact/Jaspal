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
            <div className="left-container">
                <img src='/Image/41.png' alt='' />
                <div className="description-box">
                    <p className="title">Men  T Shirt  Full Sleeves</p>
                    <div className="size&color">
                        <p className="size"> </p>
                    </div>
                </div>
            </div>
        </div>


      </div>
    </>
  );
};

export default MyOrders;
