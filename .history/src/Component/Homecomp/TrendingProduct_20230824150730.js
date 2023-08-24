/** @format */

import React from "react";

const TrendingProduct = ({ data  , title }) => {
  return (

    <p className="Heading-all"> {title} </p>
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
