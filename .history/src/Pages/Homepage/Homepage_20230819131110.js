/** @format */

import React from "react";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import OfferProduct from "../../Component/Homecomp/OfferProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";

const Homepage = () => {
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
      title: "Summery Sundresses",
    },
  ];

  return (
    <div className="Home-Page">
      <Filter left={"34%"} />
      <OfferProduct />
      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct />
      <p className="Heading-all">New</p>
      <FullWidthProduct />
    </div>
  );
};

export default Homepage;
