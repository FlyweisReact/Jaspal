/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ name, category }) => {
  return (
    <div className="BreadCrumb">
      <Link to="/homepage">Home /</Link>
      <a to="/homepage">{category} /</a>
      <Link to="/homepage"> {name} </Link>
    </div>
  );
};

export default Breadcrumb;
