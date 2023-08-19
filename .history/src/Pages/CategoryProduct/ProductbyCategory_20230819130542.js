/** @format */

import React from "react";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/CategoryProduct/Filter";

const ProductbyCategory = () => {
  return (
    <div className="Category-Product">
      <Filter left={"44%"} />
      <CategorySlide />
      <div className="FullWidth-Category-Product"></div>
    </div>
  );
};

export default ProductbyCategory;
