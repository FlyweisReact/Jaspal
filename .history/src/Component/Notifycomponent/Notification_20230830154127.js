/** @format */

import React, { useState, useEffect } from "react";
import { get_Notification } from "../../Repository/category";

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

      {response?.map((item, index) => (
        <div key={index} className='Msg-box' >
          <img src={item.productId?.productImage?.[0]} alt="" />
          <p> {item?.title} </p>
          
          <button>View</button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
