/** @format */

import React, { useEffect } from "react";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import OfferProduct from "../../Component/Homecomp/OfferProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";

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
      title: "Beach Date Bags",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home-Page">
      <Navbar />
      <Filter left={"34%"} />
      <OfferProduct />
      <TrendingProduct data={TrendingProducts} />
      <p className="Heading-all">New</p>
      <FullWidthProduct products={products} />
      <Footer />
    </div>
  );
};

export default Homepage;