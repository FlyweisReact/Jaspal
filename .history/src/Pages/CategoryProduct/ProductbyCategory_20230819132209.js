/** @format */

import React from "react";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
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
    {
      img: "/Image/13.png",
      title: "Summery Sundresses",
    },
  ];

  const products = [
    {
      img: "/Image/16.png",
      light: "Exclusive",
      title: "Jade Overalls",
    },
    {
      img: "/Image/17.png",
      light: "Our Picks",
      title: "Daisy Summer Top",
    },
    {
      img: "/Image/18.png",
      light: "Limited Stock",
      title: "Strawberry Sundresse",
    },
    {
      img: "/Image/19.png",
      light: "Season Pick",
      title: "Bootcut Jeans",
    },
  ];
  return (
    <div className="Category-Product">
      <Filter left={"44%"} />
      <CategorySlide />
      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct data={TrendingProducts} />
      <p className="Heading-all">New</p>
      <FullWidthProduct products={products} />
      <button className="Load-More">load more</button>
    </div>
  );
};

export default ProductbyCategory;
