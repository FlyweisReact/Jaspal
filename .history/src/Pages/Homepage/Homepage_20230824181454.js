/** @format */

import React, { useEffect, useState } from "react";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import OfferProduct from "../../Component/Homecomp/OfferProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { getsubCategorybyGender } from "../../Repository/category";

const Homepage = () => {
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [ products , setProducts ] = useState([])

  useEffect(() => {
    getsubCategorybyGender(
      setTrendingLoading,
      setTrendingProducts,
      "64e731615a1ffa53e6fb25d3"
    );
  }, []);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home-Page">
      <Navbar />
      <Filter left={"34%"} />
      <OfferProduct />
      <TrendingProduct
        data={TrendingProducts}
        title={"Trending This Week"}
        loading={trendingLoading}
      />
      <FullWidthProduct products={products} />
      <Footer />
    </div>
  );
};

export default Homepage;
