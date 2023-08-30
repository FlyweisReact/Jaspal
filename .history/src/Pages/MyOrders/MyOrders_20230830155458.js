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
  const [ query , setQuery ] = useState(null)

  useEffect(() => {
    myOrder(setResponse, setLoading);
  }, []);

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
              <input type="search" placeholder="Search Orders" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          {response?.map((item, index) => (
            <div className="Order-List" key={index}>
                <div className="cont">
                  <div className="left-container">
                    <img src={item.productId?.productImage?.[0]} alt="" />
                    <div className="description-box">
                      <p className="title"> {item.productId?.productName} </p>
                      <div className="size-desc">
                        <p className="size"> {item.unitInwords} </p>
                        <span
                          className="color"
                          style={{
                            background: item.productVarientId?.color?.colorCode,
                          }}
                        ></span>
                      </div>
                      <div className="price-box">
                        <p>QTY - {item.quantity} </p>
                        <p> {item.total} </p>
                      </div>
                    </div>
                  </div>

                  <div className="right-container">
                    <div className="two-sec">
                      <p>Order No- {item.orderId} </p>
                      <p>Date-{item?.createdAt?.slice(0, 10)} </p>
                    </div>
                    <p className="arr"></p>
                    {/* <p className="arr">Arriving on 25/08/2023</p> */}
                    {/* <div className="three-buttons">
                      <button className="light">View Order Detail</button>
                      <button>Track your Order</button>
                      <button>Cancel</button>
                    </div> */}
                  </div>
                </div>
            </div>
          ))}

          <div className="two-buttons mb-3">
            <Link to="/homepage">
              <button>Continue Shopping</button>
            </Link>
            {/* <button>Go to My Orders</button> */}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default MyOrders;
