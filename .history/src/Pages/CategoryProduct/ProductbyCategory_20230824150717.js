/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import {
  getCategorybyGender,
  getProductbyGender,
  getsubCategorybyGender,
} from "../../Repository/category";

const ProductbyCategory = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [prevId, setPrevId] = useState("");

  const totalId = categoryId?.length > 5 ? categoryId : prevId;

  let title = "New";

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategorybyGender(id, setLoading, setResponse, setPrevId);
  }, [id]);

  useEffect(() => {
    getProductbyGender(setProductLoading, setProducts, limit, id);
  }, [limit, id]);

  useEffect(() => {
    if (totalId) {
      getsubCategorybyGender(setTrendingLoading, setTrendingProducts, totalId);
    }
  }, [totalId , id]);

  let margLeft;
  if (id === "women") {
    margLeft = "44%";
  } else if (id === "men") {
    margLeft = "54%";
  } else if (id === "kid") {
    margLeft = "64%";
  }

  return (
    <div className="Category-Product">
      <Navbar />
      <Filter left={margLeft} />
      <CategorySlide response={response} category={setCategoryId} />

      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct data={TrendingProducts} title={"Trending This Week"} />

      <FullWidthProduct
        products={products}
        loading={productLoading}
        title={title}
      />
      <button className="Load-More" onClick={() => setLimit(limit + 4)}>
        load more
      </button>
      <Footer />
    </div>
  );
};

export default ProductbyCategory;
