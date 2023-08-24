/** @format */

import React from "react";
import { Link } from "react-router-dom";

const FullWidthProduct = ({ products }) => {
  return (
    <div className="full-width-product">
      {products?.map((i, index) => (
        <div className="Main" key={index}>
          <div className="img-container">
            <i className="fa-sharp fa-regular fa-heart"></i>
            <Link to="/product/id/T-Shirt">
              <img src={i.productImage?.[0]} alt="" />
            </Link>
          </div>
          <div className="product-desc">
            <p className="light">35</p>
            <Link to="/product/id/T-Shirt">
            <p className="title"> {i.productName} </p>
            </Link>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullWidthProduct;
