/** @format */

import React , { useState , useEffect } from "react";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar"
;
import { myOrder } from "../../Repository/category";

const MyOrders = () => {

  const [ loading , setLoading ]  = useState(false)
  const [ response ,setResponse ] = useState([])

  useEffect(() => {
    myOrder(setResponse , setLoading)
  },[])

  return (
    <>
      <Navbar />
      <div className="my-orders">
        <div className="Heading-Cont">
          <p>Order List</p>
          <div className="search-box">
            <input type="search" placeholder="Search Orders" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>


        {response?.map((i ,index) => (
          <div className="Order-List" key={index} >
          <div className="left-container">
            <img src="/Image/41.png" alt="" />
            <div className="description-box">
              <p className="title">Men T Shirt Full Sleeves</p>
              <div className="size-desc">
                <p className="size"> L </p>
                <span
                  className="color"
                  style={{ background: "#05C2CB" }}
                ></span>
              </div>
              <div className="price-box">
                <p>QTY-1</p>
                <p>₹ 1800</p>
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="two-sec">
              <p>Order No-0123456789</p>
              <p>Date-14/08/2023</p>
            </div>

            <p className="arr">Arriving on 25/08/2023</p>

            <div className="three-buttons">
              <button className="light">View Order Detail</button>
              <button>Track your Order</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
        ))}

      

        <div className="two-buttons">
          <button>Continue Shopping</button>
          <button>Go to My Orders</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
