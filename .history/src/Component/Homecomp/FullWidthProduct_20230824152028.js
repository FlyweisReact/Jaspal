/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

const FullWidthProduct = ({ products, loading ,title }) => {
  return loading === true ? (
    <div className="full-width-product">
      {[1, 2, 3, 4].map((i) => (
        <div className="Main" key={i}>
          <div className="img-container">
            <Skeleton.Image active size={44} />
          </div>
          <div className="product-desc">
            <Skeleton active />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <>
      <p className="Heading-all"> {title} </p>
      <div className="full-width-product">
        {products?.map((i, index) => (
          <div className="Main" key={index}>
            <div className="img-container">
              <i className="fa-sharp fa-regular fa-heart"></i>
              <Link to={`/product/${i._id}/${i.pr}`}>
                <img src={i.productImage?.[0]} alt="" />
              </Link>
            </div>
            <div className="product-desc">
              <p className="light"> </p>
              <Link to="/product/id/T-Shirt">
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
