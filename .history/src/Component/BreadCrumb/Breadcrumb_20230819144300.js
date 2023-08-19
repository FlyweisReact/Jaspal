/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="BreadCrumb">
      <Link to="/">Home /</Link>
      <Link to="/">Men /</Link>
      <Link to="/">T- /</Link>
    </div>
  );
};

export default Breadcrumb;
