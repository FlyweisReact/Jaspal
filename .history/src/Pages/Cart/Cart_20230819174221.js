/** @format */

import React from "react";
import Filter from "../../Component/Homecomp/Filter";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
  return (
    <div className="cart-page">
      <Navbar />
      <Filter left={"64%"} />

      <div className="progess-bar">
        <div className="full-circle active"></div>
        <div className="line"></div>
        <div className="full-circle"></div>
        <div className="line"></div>
        <div className="full-circle"></div>
      </div>

      <div className="Cart-container">
        
      </div>

    </div>
  );
};

export default Cart;
