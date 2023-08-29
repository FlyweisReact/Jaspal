/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ name , category }) => {
  return (
    <div className="BreadCrumb">
      <Link to="/homepage">Home /</Link>
      <Link to="/homepage">Men /</Link>
      <Link to="/homepage"> {name} </Link>
    </div>
  );
};

export default Breadcrumb;