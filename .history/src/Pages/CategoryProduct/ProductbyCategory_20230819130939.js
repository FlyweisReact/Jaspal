/** @format */

import React from "react";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/CategoryProduct/Filter";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";

const ProductbyCategory = () => {
  return (
    <div className="Category-Product">
      <Filter left={"44%"} />
      <CategorySlide />
      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct />
      <div className="FullWidth-Category-Product"></div>
    </div>
  );
};

export default ProductbyCategory;
