/** @format */

import React from "react";
import { BsGrid } from "react-icons/bs";

const Filter = () => {
  return (
    <div className="Filter">
      <div className="left"></div>
      <div className="center">
        <button className="active">
          <BsGrid />
          <span>All</span>
        </button>
        <button className="active">
          <img src="/Image/Icons/baby-boy.png" alt="" />
          <span>Women</span>
        </button>
        <button className="active">
          <img src="/Image/Icons/baby-boy.png" alt="" />
          <span>Women</span>
        </button>
        <button className="active">
          <img src="/Image/Icons/baby-boy.png" alt="" />
          <span>Kids</span>
        </button>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Filter;