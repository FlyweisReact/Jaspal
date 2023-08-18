/** @format */

import React from "react";
import { BsGrid } from "react-icons/bs";

const Filter = () => {
  return (
    <div className="Filter-Category">
      <div className="left"></div>
      <div className="center">
        <button className="active">
          <BsGrid />
          <span>All</span>
        </button>
        <button>
          <img src="https://www.clipartmax.com/png/middle/189-1893195_white-female-clip-art-at-clker-female-icon-png-white.png" alt="" />
          <span>Women</span>
        </button>
        <button>
          <img src="/Image/Icons/man-in-suit-and-tie.png" alt="" />
          <span>Women</span>
        </button>
        <button>
          <img src="/Image/Icons/baby-boy.png" alt="" />
          <span>Kids</span>
        </button>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Filter;
