/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../Repository/category";
import { Skeleton } from "antd";
import { Alert} from 'react-bootstrap'

const ShippingAddres = () => {
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
      {loading === true ? <div
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
          </div> : products?.length === 0 || !products ? <div className="alert-container">
            <Alert>No Product added in Cart Yet !</Alert>
          </div> : <></>   }
    

      <Footer />
    </div>
  );
};

export default ShippingAddres;
