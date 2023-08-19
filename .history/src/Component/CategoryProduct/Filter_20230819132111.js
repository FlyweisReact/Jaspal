/** @format */

import React from "react";
import { BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";

const Filter = ({ left }) => {
  return (
    <div className="Filter-C">
      <div className="Filter-Category">
        <div className="center">
          <Link to="/homepage">
            <button>
              <BsGrid />
              <span>All</span>
            </button>
          </Link>

          <Link to="/product/Women">
            <button className="active">
              <i className="fa-solid fa-person-dress"></i>
              <span>Women</span>
            </button>
          </Link>
          <Link to="/product/Men">
            <button>
              <i className="fa-solid fa-person"></i>
              <span>Men</span>
            </button>
          </Link>

        <Link to='/product/Kid' ></Link>
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
        <div className="empty-colored" style={{ left: `${left}` }}></div>
      </div>
    </div>
  );
};

export default Filter;
