/** @format */

import React, { useEffect, useState } from "react";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import OfferProduct from "../../Component/Homecomp/OfferProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import {
  getProductbyCategory,
  getsubCategorybyGender,
} from "../../Repository/category";

const Homepage = () => {
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);

  useEffect(() => {
    getsubCategorybyGender(
      setTrendingLoading,
      setTrendingProducts,
      "64e731615a1ffa53e6fb25d3"
    );
    getProductbyCategory(
      setProductLoading,
      setProducts,
      "64e731615a1ffa53e6fb25d3"
    );
  }, []);

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
      <FullWidthProduct
        products={products}
        loading={productLoading}
        title={title}
      />
      <Footer />
    </div>
  );
};

export default Homepage;
