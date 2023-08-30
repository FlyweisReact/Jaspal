/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get_Notification } from "../../Repository/category";
import { Skeleton } from "antd";

const Notification = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    get_Notification(setLoading, setResponse);
  }, []);

  return (
    <div className="user-dashboard">
      <div className="Heading-component">
        <p>All Notification</p>
        <i className="fa-solid fa-x" />
      </div>

    {loading === true ?  : response?.map((item, index) => (
        <div key={index} className="Msg-box">
          <img src={item.productId?.productImage?.[0]} alt="" />
          <p> {item?.title} </p>
          <Link
            to={`/product/${item.productId?._id}/${item.productId?.productName}`}
          >
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Notification;
