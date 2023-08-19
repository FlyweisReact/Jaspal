/** @format */

import React from "react";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import OfferProduct from "../../Component/Homecomp/OfferProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";

const Homepage = () => {
  return (
    <div className="Home-Page">
      <Filter left={34%} />

      <OfferProduct />
      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct />
      <p className="Heading-all">New</p>
      <FullWidthProduct />
    </div>
  );
};

export default Homepage;
