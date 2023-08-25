/** @format */

import React, { useState , useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../Repository/category";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [ loading , setLoading ] = useState(false)
  const [ cart , setCart ] = useState({})

  useEffect(() => {
    getCart(setLoading , cart)
  },[])


  return (
    <div className="cart-page">
      <div>
        <Navbar />
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
                  <p className="rem">Move to wishlist</p>
                  <p className="rem">Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
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
            <button onClick={() => navigate("/shipping-address")}>
              PROCEED TO CHECK OUT
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
