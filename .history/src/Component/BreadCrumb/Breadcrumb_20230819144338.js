/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="BreadCrumb">
      <Link to="/homepage">Home /</Link>
      <Link to="/homepage">Men /</Link>
      <Link to="/homepage">T-Shirt /</Link>
    </div>
  );
};

export default Breadcrumb;
