/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { deleteCartItem, getCart } from "../../Repository/category";
import { Alert, Skeleton } from "antd";

const Cart = () => {
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

  const RemoveItem = (id) => {
    deleteCartItem(id);
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
        ) : (
          <>
          {products?.length === 0 || !products ? <Alert>No Product added in Cart Yet !</Alert> : }
       
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
