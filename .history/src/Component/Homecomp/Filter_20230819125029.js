/** @format */

import React from "react";
import { BsGrid } from "react-icons/bs";

const Filter = () => {
  return (
    <div className="Filter-C">
      <div className="Filter-Category">
        <div className="center">
          <button className="active">
            <BsGrid />
            <span>All</span>
          </button>

          <button>
            <i className="fa-solid fa-person-dress"></i>
            <span>Women</span>
          </button>
          <button>
            <i className="fa-solid fa-person"></i>
            <span>Women</span>
          </button>
          <button>
            <i className="fa-solid fa-child"></i>
            <span>Kids</span>
          </button>
        </div>
        <div className="right">
          <button>
            <span>Filter & Sort</span>
            <i className="fa-solid fa-sliders" />
          </button>
        </div>
      </div>
      <div className="empty-container">
        <div className="empty"></div>
        <siv></siv>
      </div>
    </div>
  );
};

export default Filter;
