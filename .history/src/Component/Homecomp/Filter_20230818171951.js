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
          <img src="data:image/png;base64,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" alt="" />
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
