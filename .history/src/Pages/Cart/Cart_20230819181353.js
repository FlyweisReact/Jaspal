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
        <div className="left-container">
           <div className="main">
           <div className="img-container">
                <img src='/Image/41.png' alt='' />
            </div>
            <div className="desc-box">
                <p className="title">Men  T Shirt  Full Sleeves</p>
                <p className="size">L</p>
                <span className="color-cont">
                    <div style={{background :"#05C2CB"}}></div>
                </span>

                <div className="multi-buttons">

                <div className="Quantity">
                    
                </div>

                </div>
            </div>
           </div>
        </div>
        <div className="right-container"></div>
      </div>

    </div>
  );
};

export default Cart;
