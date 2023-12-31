/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Checkout, getCart } from "../../Repository/category";

const PlaceOrder = () => {
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

  const placeOrder = (e) => {
    e.preventDefault();
    Checkout(navigate);
  };

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
            {products?.map((item, index) => (
              <div className="main" key={index}>
                <div className="img-container">
                  <img src={item?.productId?.productImage?.[0]} alt="" />
                </div>
                <div className="desc-box">
                  <p className="title"> {item.productId?.productName} </p>
                  {item.unitInwords ? (
                    <p className="size"> {item.unitInwords} </p>
                  ) : (
                    ""
                  )}
                  {item?.productVarientId?.color?.colorCode ? (
                    <span className="color-cont">
                      <div
                        style={{
                          background: item?.productVarientId?.color?.colorCode,
                        }}
                      ></div>
                    </span>
                  ) : (
                    ""
                  )}

                  <div className="multi-buttons">
                    <div className="Quantity">
                      <span> Quantity : {item.quantity} </span>
                    </div>
                    <p className="price">{item.total} </p>
                  </div>
                </div>
              </div>
            ))}

            <p className="summary"> Order Summary</p>
            <hr />
            <div className="two-sec">
              <p>Sub Total</p>
              <p> {cart?.totalAmount} </p>
            </div>
            <hr />
            <div className="two-sec">
              <p>ESTIMATED TOTAL</p>
              <p> {cart?.totalAmount} </p>
            </div>
          </div>
          <div className="right-container">
            <p className="summary">Review Place Order</p>

            <div className="Review-Box">
              <div className="two-sec">
                <p>Shipping Address</p>
                <Link to="/shipping-address">
                  <p>
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </p>
                </Link>
              </div>

              <p className="description"> {cart?.email} </p>
              <p className="description">
                {" "}
                {cart?.firstName} {cart?.lastName}{" "}
              </p>
              <p className="description"> {cart?.phone} </p>

              <div className="mt-2"></div>

              <p className="description">
                {cart?.pincode} ,{cart?.state} ,{cart?.address} ,{cart?.city} ,
                {cart?.country}{" "}
              </p>
            </div>

            {/* <div className="Review-Box mt-5">
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
            </div> */}

            <div className="Review-Box mt-5">
              <div className="two-sec">
                <p>Payment options</p>
              </div>

              <div className="radio-button">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label for="html">Prepaid</label>
              </div>

              <p className="description">Debit/ Credit / Net Banking /UPI</p>
            </div>

            <button onClick={placeOrder}>Proceed to Pay</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceOrder;
