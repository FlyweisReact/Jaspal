/** @format */

import React from "react";
import { Skeleton } from "antd";

const TrendingProduct = ({ data, title, loading }) => {
  return loading === true ? (
    <div className="Trending-Product">
      {[1, 2, 3, 4].map((i) => (
        <div className="Main" key={i}>
          <Skeleton.Image active />
          <Skeleton active />
        </div>
      ))}
    </div>
  ) : (
    <>
    {
      data?.length === 0 || !data ? "" : 
      <></>
    }
      
    </>
  );
};

export default TrendingProduct;
