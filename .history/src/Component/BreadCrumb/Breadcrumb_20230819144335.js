/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="BreadCrumb">
      <Link to="/homepage">Home /</Link>
      <Link to="/">Men /</Link>
      <Link to="/">T-Shirt /</Link>
    </div>
  );
};

export default Breadcrumb;
