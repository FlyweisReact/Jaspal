/** @format */

import React from "react";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/CategoryProduct/Filter";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";

const ProductbyCategory = () => {
  const TrendingProducts = [
    {
      img: "/Image/13.png",
      title: "Summery Sundresses",
    },
    {
      img: "/Image/14.png",
      title: "Breezy Heels",
    },
    {
      img: "/Image/15.png",
      title: "Beach Date Bags",
    },
    {
        img: "/Image/14.png",
        title: "Breezy Heels",
      },
      {
        img: "/Image/15.png",
        title: "Beach Date Bags",
      },
  ];
  return (
    <div className="Category-Product">
      <Filter left={"44%"} />
      <CategorySlide />
      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct data={TrendingProducts} />
      <div className="FullWidth-Category-Product"></div>
    </div>
  );
};

export default ProductbyCategory;
