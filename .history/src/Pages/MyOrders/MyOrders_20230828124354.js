/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { myOrder } from "../../Repository/category";
import { Skeleton } from "antd";

const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    myOrder(setResponse, setLoading);
  }, []);

  return (
    <>
      <Navbar />

      <div className="Indivisual-Product"> 
      {loading === true ?
        <div className="product-indivisual-container">
              <div className="left-container">
                <div className="img-container" style={{ height: "500px" }}>
                  <Skeleton.Image active />
                </div>

                <div className="Multiple-Image" style={{ height: "120px" }}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton.Image active key={i} />
                  ))}
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
            </div> :""}
      </div>
      
      <div className="my-orders">
        <div className="Heading-Cont">
          <p>Order List</p>
          <div className="search-box">
            <input type="search" placeholder="Search Orders" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {response?.map((i, index) => (
          <div className="Order-List" key={index}>
            {i.Orders?.map((item) => (
              <div className="cont">
                <div className="left-container">
                  <img src="/Image/41.png" alt="" />
                  <div className="description-box">
                    <p className="title"> {item.productId?.productName  } </p>
                    <div className="size-desc">
                      <p className="size"> {item.unitInwords} </p>
                      <span
                        className="color"
                        style={{ background: item.productVarientId?.color?.colorCode }}
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
                    <p>Order No- {i.orderId} </p>
                    <p>Date-{item?.createdAt?.slice(0,10  )} </p>
                  </div>
              <p className="arr"></p>
                  {/* <p className="arr">Arriving on 25/08/2023</p> */}


                  <div className="three-buttons">
                    <button className="light">View Order Detail</button>
                    <button>Track your Order</button>
                    <button>Cancel</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="two-buttons mb-3">
          <button>Continue Shopping</button>
          {/* <button>Go to My Orders</button> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
