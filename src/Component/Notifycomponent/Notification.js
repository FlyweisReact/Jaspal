/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get_Notification } from "../../Repository/category";
import { Skeleton } from "antd";

const Notification = ({open , dashboardRef2}) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    get_Notification(setLoading, setResponse);
  }, []);

  return (
    <div className="user-dashboard" ref={dashboardRef2}>
      <div className="Heading-component">
        <p>All Notification</p>
        <i className="fa-solid fa-x" onClick={() => open(false)} />
      </div>

      {loading === true
        ? [1, 2, 3].map((i) => (
            <div key={i} style={{ height: "150px", padding: "10px" }}>
              <Skeleton.Image active />
            </div>
          ))
        : response?.map((item, index) => (
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
