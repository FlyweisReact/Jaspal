/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { getCategorybyGender } from "../../Repository/category";

const ProductbyCategory = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategorybyGender(id, setLoading, setResponse);
  }, [id]);

  

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

  let products;
  if (id === "women") {
    products = [
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
  } else if (id === "men") {
    products = [
      {
        img: "/Image/30.png",
        light: "Exclusive",
        title: "Slim Fit",
      },
      {
        img: "/Image/31.png",
        light: "Our Picks",
        title: "Party",
      },
      {
        img: "/Image/32.png",
        light: "Limited Stock",
        title: "Casual",
      },
      {
        img: "/Image/33.png",
        light: "Season Pick",
        title: "Jacket",
      },
    ];
  } else if (id === "kid") {
    products = [
      {
        img: "/Image/40.png",
        light: "Exclusive",
        title: "Slim Fit",
      },
      {
        img: "/Image/40-1.png",
        light: "Our Picks",
        title: "Party",
      },
      {
        img: "/Image/40-2.png",
        light: "Limited Stock",
        title: "Party",
      },
      {
        img: "/Image/40-3.png",
        light: "Season Pick",
        title: "Frock",
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
      <p className="Heading-all">New</p>
      <FullWidthProduct products={products} />
      <button className="Load-More">load more</button>
      <Footer />
    </div>
  );
};

export default ProductbyCategory;
