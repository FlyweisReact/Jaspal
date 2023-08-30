/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import img from "../../Image/1.png";

const FullWidthProduct = ({ products, loading, title }) => {
  return loading === true ? (
    <div className="full-width-product">
      {[1, 2, 3, 4].map((i) => (
        <div className="Main" key={i}>
          <div className="img-container" style={{ height: "200px" }}>
            <Skeleton.Image active />
          </div>
          <div className="product-desc">
            <Skeleton active />
          </div>
        </div>
      ))}
    </div>
  ) :
  
  !p
  products?.length === 0 || !products ? (
    <div className="empty-cart">
      <img src={img} alt="" />
      <p>No Product Related to {title} </p>
      <div className="two-buttons">
        <Link to="/homepage">
          <button>Continue Shopping</button>
        </Link>
        <Link to="/my-order">
          <button>Go to My Orders</button>
        </Link>
      </div>
    </div>
  ) : (
    <>
      <p className="Heading-all"> {title} </p>
      <div className="full-width-product">
        {products?.map((i, index) => (
          <div className="Main" key={index}>
            <div className="img-container">
              <i className="fa-sharp fa-regular fa-heart"></i>
              <Link to={`/product/${i._id}/${i.productName}`}>
                <img src={i.productImage?.[0]} alt="" />
              </Link>
            </div>
            <div className="product-desc">
              <p className="light"> </p>
              <Link to={`/product/${i._id}/${i.productName}`}>
                <p className="title"> {i.productName} </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FullWidthProduct;
