/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ name, category }) => {
  return (
    <div className="BreadCrumb">
      <Link to="/homepage">Home /</Link>
      <a>{category} /</a>
      <a> {name} </a>
    </div>
  );
};

export default Breadcrumb;
