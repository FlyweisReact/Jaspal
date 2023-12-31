/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteCartItem,
  getCart,
  updateCartQuantity,
} from "../../Repository/category";
import { Skeleton } from "antd";

const Cart = () => {
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

  const RemoveItem = async (id) => {
    await deleteCartItem(id);
    fetchHandler();
  };

  const updateQuan = async (productid, quantity) => {
    const payload = { productid, quantity };
    await updateCartQuantity(payload);
    fetchHandler();
  };

  return (
    <div className="cart-page">
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
          <div className="empty-cart">
            <img src="./Image/47.png" alt="" />
            <p>Your Cart is empty</p>
            <div className="two-buttons">
              <Link to="/homepage">
                <button>Continue Shopping</button>
              </Link>
              <Link to="/my-order">
                <button>Go to My Orders</button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {" "}
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
                      {item.unitInwords ? (
                        <p className="size"> {item.unitInwords} </p>
                      ) : (
                        ""
                      )}

                      {item?.productVarientId?.color?.colorCode ? (
                        <span className="color-cont">
                          <div
                            style={{
                              background:
                                item?.productVarientId?.color?.colorCode,
                            }}
                          ></div>
                        </span>
                      ) : (
                        ""
                      )}

                      <div className="multi-buttons">
                        <div className="Quantity">
                          <i
                            className="fa-solid fa-minus"
                            onClick={() => {
                              updateQuan(item._id, item.quantity - 1);
                            }}
                          ></i>
                          <span>{item.quantity} </span>
                          <i
                            className="fa-solid fa-plus"
                            onClick={() => {
                              updateQuan(item._id, item.quantity + 1);
                            }}
                          ></i>
                        </div>
                        <p className="price"> ${item.total} </p>
                        <p className="rem">Move to wishlist</p>
                        <p className="rem" onClick={() => RemoveItem(item._id)}>
                          Remove
                        </p>
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
                  <p> ${cart?.totalAmount} </p>
                </div>
                <hr />
                <div className="two-sec">
                  <p>ESTIMATED TOTAL</p>
                  <p> ${cart?.totalAmount} </p>
                </div>
                <button onClick={() => navigate("/shipping-address")}>
                  PROCEED TO CHECK OUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
