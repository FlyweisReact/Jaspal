/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../Repository/category";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart(setLoading, setCart);
  }, []);

  useEffect(() => {
    if (cart) {
      setProducts(cart.products);
    }
  }, [cart]);

  console.log(cart, "Cart");

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
            {products?.map((item, index) => (
              <div className="main" key={index}>
                <div className="img-container">
                  <img src={item?.productId?.productImage?.[0]} alt="" />
                </div>
                <div className="desc-box">
                  <p className="title"> {item.productId?.productName} </p>
                  <p className="size"> {item.unitInwords} </p>
                  <span className="color-cont">
                    <div style={{ background: item.products?.productVarientId?.color?Cart. }}></div>
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
                    <p className="price">{item.total} </p>
                    <p className="rem">Move to wishlist</p>
                    <p className="rem">Remove</p>
                  </div>
                </div>
              </div>
            ))}
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