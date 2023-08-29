/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { myOrder } from "../../Repository/category";

const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    myOrder(setResponse, setLoading);
  }, []);

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

        {response?.map((i, index) => (
          <div className="Order-List" key={index}>
          {i.Orders?.map((item) => (

          ))}
        
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
