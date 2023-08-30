/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get_Banner } from "../../Repository/category";
import FavouritesSlide from "./FavouritesSlide";

const OfferProduct = () => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topBanner, setTopBanner] = useState([]);
  const [bootBanner, setBootBanner] = useState([]);
  const [products, setProducts] = useState([]);

  const fetch_Banner = () => {
    get_Banner(setLoading, "offer", setBanner);
    get_Banner(setLoading, "top", setTopBanner);
    get_Banner(setLoading, "Boot", setBootBanner);
    get_Banner(setLoading, "productBanner", setProducts);
  };

  useEffect(() => {
    fetch_Banner();
  }, []);

  const data = [
    {
      img: "/Image/10.png",
      title: "Women’s Flats Summer Straps",
      price: 2999,
    },
    {
      img: "/Image/11.png",
      title: "Borgia Boots  Close",
      price: 2599,
    },
  ];

  return (
    <div className="offer-products">
      <div className="left-container">
        <div
          className="img-container"
          style={{ backgroundImage: `url(${topBanner?.[0]?.image})` }}
        />
        <div
          className="img-container"
          style={{ backgroundImage: `url(${topBanner?.[1]?.image})` }}
        />

        <div className="two-sec">
          <div className="left">
            <img src={banner?.[0]?.image} alt="" />
          </div>
          <div className="right">
            <FavouritesSlide />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="product-container">
          <div className="Main">
            <i className="fa-regular fa-heart"></i>
            <img src={products?.[0]?.productId?.productImage?.[0]} alt="" />
            <div className="desc">
              <Link
                to={`/product/${products?.[0]?.productId?._id}/${products?.[0]?.productId?.productName}`}
              >
                <span> {products?.[0]?.productId?.productName} </span>
              </Link>
            </div>
          </div>
          <div className="Main">
            <i className="fa-regular fa-heart"></i>
            <img src={products?.[1]?.productId?.productImage?.[0]} alt="" />
            <div className="desc">
              <Link
                to={`/product/${products?.[0]?.productId?._id}/${products?.[0]?.productId?.productName}`}
              >
                <span> {products?.[0]?.productId?.productName} </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src={bootBanner?.[0]?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
