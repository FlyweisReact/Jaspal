/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

const FullWidthProduct = ({ products, loading ,title }) => {
  return loading === true ? (
    <div className="full-width-product">
      {[1, 2, 3, 4].map((i) => (
        <div className="Main" key={i}>
          <div className="img-container" style={{height : '200px'}} >
            <Skeleton.Image active />
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
      {products?.length === 0 || !products ? "" : }
        
      </div>
    </>
  );
};

export default FullWidthProduct;
