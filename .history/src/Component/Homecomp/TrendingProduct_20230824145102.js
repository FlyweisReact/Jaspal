/** @format */

import React from "react";

const TrendingProduct = ({ data }) => {
  return (
    <div className="Trending-Product">
      {data?.map((item, index) => (
        <div className="Main" key={index}>
          <img src={item.image} alt="" />
          <p> {item.name} </p>
        </div>
      ))}
    </div>
  );
};

export default TrendingProduct;
