/** @format */

import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";

const PlaceOrder = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="place-order">
      <Navbar />

      <div className="progess-bar">
        <div className="full-circle active"></div>
        <div className="line activeLine"></div>
        <div className="full-circle active"></div>
        <div className="line activeLine"></div>
        <div className="full-circle active"></div>
      </div>

      <div className="shipping-address">
        <div className="Cart-container">
          <div className="left-container">
            <div className="main">
              <div className="img-container">
                <img src="/Image/41.png" alt="" />
              </div>
              <div className="desc-box">
                <p className="title">Men T Shirt Full Sleeves</p>
                <p className="size">L</p>
                <span className="color-cont">
                  <div style={{ background: "#05C2CB" }}></div>
                </span>

                <div className="multi-buttons">
                  <div className="Quantity">
                    <i
                      className="fa-solid fa-minus"
                      onClick={() =>
                        quantity === 1 ? "" : setQuantity(quantity - 1)
                      }
                    ></i>
                    <span>{quantity} </span>
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => setQuantity(quantity + 1)}
                    ></i>
                  </div>
                  <p className="price">₹ 1800</p>
                </div>
              </div>
            </div>

            <p className="summary"> Order Summary</p>
            <hr />
            <div className="two-sec">
              <p>Sub Total</p>
              <p>₹ 1800</p>
            </div>
            <hr />
            <div className="two-sec">
              <p>ESTIMATED TOTAL</p>
              <p>₹ 1800</p>
            </div>
          </div>
          <div className="right-container">
            <p className="summary">Review Place Order</p>

            <div className="Review-Box">
              <div className="two-sec">
                <p>Shipping Address</p>
                <p>
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                </p>
              </div>

              <p className="description">xyz@gmail.com</p>
              <p className="description">ABC USM</p>
              <p className="description">0123456789</p>

              <div className="mt-2"></div>

              <p className="description">X-852 </p>
              <p className="description">xyz abc</p>
              <p className="description">Delhi, India</p>
            </div>

            <div className="Review-Box mt-5">
              <div className="two-sec">
                <p>Shipping Method</p>
                <p>
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                </p>
              </div>

              <p className="description">Free</p>
              <p className="description" style={{ color: "red" }}>
                Estimated Delivery with in 2 to 5 working days
              </p>

              <div className="mt-2"></div>

              <p className="description">Return Policy</p>
              <p className="description" style={{ color: "red" }}>
                From Delivery XX Days
              </p>
            </div>

            <div className="Review-Box mt-5">
              <div className="two-sec">
                <p>Payment options</p>
              </div>

            <div className="radio-button">
            <

            </div>

              <p className="description">Debit/ Credit / Net Banking /UPI</p>
            </div>

            <button>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;