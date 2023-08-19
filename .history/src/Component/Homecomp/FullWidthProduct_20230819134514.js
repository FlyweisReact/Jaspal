/** @format */

import React from "react";
import { Link } from "react-router-dom";

const FullWidthProduct = ({ products }) => {
  return (
    <div className="full-width-product">
      {products.map((i, index) => (
        <div className="Main" key={index}>
          <div className="img-container">
            <i className="fa-sharp fa-regular fa-heart"></i>
            <Link to="/product/id/T-Shirt">
              <img src={i.img} alt="" />
            </Link>
          </div>
          <div className="product-desc">
            <p className="light">{i.light}</p>
            <Link to="/product/id/T-Shirt">

            </Link>
            <p className="title"> {i.title} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullWidthProduct;