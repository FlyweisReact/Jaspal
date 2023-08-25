/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../Repository/category";
import { Skeleton } from "antd";
import { Alert } from "react-bootstrap";

const ShippingAddres = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  // Input value
  const [ email , setEmail ] = useState(null)
  const [ firstName , setFirstName ] = useState(null)
  const [ lastName , setLastName ] = useState(null)
  const [ ] = useState(null)
  const [ ] = useState(null)
  const [ ] = useState(null)
  const [ ] = useState(null)


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
      {loading === true ? (
        <div
          className="Cart-container"
          style={{ alignItems: "flex-start", gap: "30px" }}
        >
          <div className="left-container">
            <div
              className="main"
              style={{ width: "100%", height: "500px", marginTop: "0" }}
            >
              <Skeleton.Image active />
            </div>
          </div>
          <div className="right-container">
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </div>
        </div>
      ) : products?.length === 0 || !products ? (
        <div className="alert-container">
          <Alert>No Product added in Cart Yet !</Alert>
        </div>
      ) : (
        <>
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
                {products?.map((item, index) => (
                  <div className="main" key={index}>
                    <div className="img-container">
                      <img src={item?.productId?.productImage?.[0]} alt="" />
                    </div>
                    <div className="desc-box">
                      <p className="title"> {item.productId?.productName} </p>
                      <p className="size"> {item.unitInwords} </p>
                      <span className="color-cont">
                        <div
                          style={{
                            background:
                              item?.productVarientId?.color?.colorCode,
                          }}
                        ></div>
                      </span>

                      <div className="multi-buttons">
                        <div className="Quantity">
                          <i className="fa-solid fa-minus"></i>
                          <span>{item.quantity} </span>
                          <i className="fa-solid fa-plus"></i>
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
                  <p> {cart?.paymentOption} </p>
                </div>
                <hr />
                <div className="two-sec">
                  <p>PAYMENT INFORMATION</p>
                  <p> {cart?.paymentOption} </p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default ShippingAddres;
