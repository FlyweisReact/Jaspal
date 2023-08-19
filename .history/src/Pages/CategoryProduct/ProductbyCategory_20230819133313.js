/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/Homecomp/Filter";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";

const ProductbyCategory = () => {
  const { id } = useParams();

  const products = [
   
  ];

  let margLeft;
  if (id === "Women") {
    margLeft = "44%";
  } else if (id === "Men") {
    margLeft = "54%";
  } else if (id === "Kid") {
    margLeft = "64%";
  }

  let TrendingProducts;
  if (id === "Women") {
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
  } else if (id === "Men") {
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
  } else if (id === "Kid") {
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
  }

  let products ;
  if (id === "Women") {
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
  } else if (id === "Men") {
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
  } else if (id === "Kid") {
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
  }

  return (
    <div className="Category-Product">
      <Filter left={margLeft} />
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
