/** @format */

import React from "react";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/CategoryProduct/Filter";

const ProductbyCategory = () => {
  return (
    <div className="Category-Product">
      <Filter left={"44%"} />
      <CategorySlide />
      <p className="Heading-all">Trending This Week</p>
      <div className="FullWidth-Category-Product"></div>
    </div>
  );
};

export default ProductbyCategory;
