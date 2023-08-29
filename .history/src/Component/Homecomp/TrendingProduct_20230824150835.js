/** @format */

import React from "react";

const TrendingProduct = ({ data, title, loading }) => {
  return;
  loading === true ? (
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