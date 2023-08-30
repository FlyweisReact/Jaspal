/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { myOrder } from "../../Repository/category";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    myOrder(setResponse, setLoading);
  }, []);

  const filterData = !query
    ? response
    : response?.filter((item) =>
        item.productId?.productName
          ?.toLowerCase()
          .includes(query?.toLowerCase())
      );

  return (
    <>
      <Navbar />

      {loading === true ? (
        <div className="Indivisual-Product">
          <div className="product-indivisual-container">
            <div className="left-container">
              <div className="img-container" style={{ height: "500px" }}>
                <Skeleton.Image active />
              </div>
            </div>
            <div className="right-container">
              <h5 className="title">
                {" "}
                <Skeleton active />{" "}
              </h5>
              <h5 className="title">
                {" "}
                <Skeleton active />{" "}
              </h5>
              <h5 className="title">
                {" "}
                <Skeleton active />{" "}
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-orders">
          <div className="Heading-Cont">
            <p>Order's List</p>
            <div className="search-box">
              <input
                type="search"
                placeholder="Search Orders"
                onChange={(e) => setQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>



          {
            filterData?.length === 0 || filterData ? 
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
          </div> : 
          }

          {}

      <Footer />
    </>
  );
};

export default MyOrders;
