/** @format */

import React from "react";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const TrendingProduct = ({ data, title, loading }) => {
  return loading === true ? (
    <div className="Trending-Product">
      {[1, 2, 3, 4].map((i) => (
        <div className="Main" key={i} style={{ height: "200px" }}>
          <Skeleton.Image active />
          <Skeleton active />
        </div>
      ))}
    </div>
  ) : data?.length === 0 || !data ? (
    ""
  ) : (
    <>
      <p className="Heading-all"> {title} </p>
      <div className="Trending-Product">
        {data?.map((item, index) => (
          <div className="Main" key={index}>
            <img src={item.image} alt="" />
            <Link to={`/subCategory/product/${}`}>
              <p> {item.name} </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingProduct;
