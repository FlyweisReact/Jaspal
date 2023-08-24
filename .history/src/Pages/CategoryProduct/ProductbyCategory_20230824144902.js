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

  let title = 'New'
  

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategorybyGender(id, setLoading, setResponse);
  }, [id]);

  useEffect(() => {
    getProductbyGender(setProductLoading, setProducts, limit , id);
  }, [limit, id]);

  useEffect(() => {
    getsubCategorybyGender()
  })

  let margLeft;
  if (id === "women") {
    margLeft = "44%";
  } else if (id === "men") {
    margLeft = "54%";
  } else if (id === "kid") {
    margLeft = "64%";
  }

  let TrendingProducts;
  if (id === "women") {
    TrendingProducts = [
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
  } else if (id === "men") {
    TrendingProducts = [
      {
        img: "/Image/24.png",
        title: "Blazers",
      },
      {
        img: "/Image/25.png",
        title: "T Shirts",
      },
      {
        img: "/Image/26.png",
        title: "Shoes",
      },
      {
        img: "/Image/27.png",
        title: "Watch",
      },
      {
        img: "/Image/28.png",
        title: "Jeans",
      },
      {
        img: "/Image/29.png",
        title: "Bags",
      },
    ];
  } else if (id === "kid") {
    TrendingProducts = [
      {
        img: "/Image/34.png",
        title: "Full Attire",
      },
      {
        img: "/Image/35.png",
        title: "Collection",
      },
      {
        img: "/Image/36.png",
        title: "Infants",
      },
      {
        img: "/Image/37.png",
        title: "1-2 Years",
      },
      {
        img: "/Image/38.png",
        title: "1-2 Years",
      },
      {
        img: "/Image/39.png",
        title: "Bags",
      },
    ];
  }


  return (
    <div className="Category-Product">
      <Navbar />
      <Filter left={margLeft} />
      <CategorySlide response={response} />

      <p className="Heading-all">Trending This Week</p>
      <TrendingProduct data={TrendingProducts} />

      <FullWidthProduct products={products} loading={productLoading} title={title} />
      <button className="Load-More" onClick={() => setLimit(limit + 4)}>
        load more
      </button>
      <Footer />
    </div>
  );
};

export default ProductbyCategory;
