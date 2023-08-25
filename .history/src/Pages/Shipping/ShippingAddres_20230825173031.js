/** @format */

import React, { useState , useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../Repository/category";

const ShippingAddres = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);


  const fetchHandler = () => {
    getCart(setLoading, setCart);
  };


  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (cart) {
      setProducts(cart.products);
    }
  }, [cart]);


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/place-order");
  };

  return (
    <div>
      <Navbar />
      <div className="progess-bar">
        <div className="full-circle active"></div>
        <div className="line activeLine"></div>
        <div className="full-circle active"></div>
        <div className="line"></div>
        <div className="full-circle"></div>
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
            <p className="summary"> SHIPPING INFORMATION</p>

            <form onSubmit={handleSubmit}>
              <div className="single-Input">
                <label>Email*</label>
                <input type="email" />
              </div>
              <div className="single-Input Double">
                <div>
                  <label>First Name*</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Last Name*</label>
                  <input type="text" />
                </div>
              </div>

              <div className="single-Input">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  minLength={8}
                  maxLength={12}
                  pattern="{0-9}"
                />
              </div>

              <div className="single-Input">
                <label>Street Address*</label>
                <input type="text" />
              </div>

              <div className="single-Input Double">
                <div>
                  <label>Zip Code*</label>
                  <input type="text" />
                </div>
                <div>
                  <label>City*</label>
                  <input type="text" />
                </div>
              </div>

              <div className="single-Input Double">
                <div>
                  <label>State*</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Country*</label>
                  <input type="text" />
                </div>
              </div>
              <button type="submit">SAVE</button>
            </form>
            <hr />
            <div className="two-sec">
              <p>SHIPPING METHOD </p>
            </div>
            <hr />
            <div className="two-sec">
              <p>PAYMENT INFORMATION</p>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingAddres;
