/** @format */

import React from "react";
import { Skeleton } from "antd";

const TrendingProduct = ({ data, title, loading }) => {
  return loading === true ? (
    <div className="Trending-Product">
      {[1, 2, 3, 4].map((i) => (
        <div className="Main" key={index}>
        <Skeleton.Image active  />
        Skeleton active />
          </div>
        <div className="Main" key={i}>
          <div className="img-container">
            <Skeleton.Image active  />
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
      <div className="Trending-Product">
        {data?.map((item, index) => (
          <div className="Main" key={index}>
            <img src={item.image} alt="" />
            <p> {item.name} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingProduct;
