/** @format */

import React from "react";

const TrendingProduct = ({ data }) => {
  return (
    <div className="Trending-Product">
      {data.map((item, index) => (
        <div className="Main" key={index}>
          <img src={item.} alt="" />
          <p>Summery Sundresses</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingProduct;
