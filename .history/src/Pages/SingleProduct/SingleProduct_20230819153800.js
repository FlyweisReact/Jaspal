/** @format */

import React from "react";
import Breadcrumb from "../../Component/BreadCrumb/Breadcrumb";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/Homecomp/Filter";
import TrendingProduct from "../../Component/Homecomp/TrendingProduct";

const SingleProduct = () => {

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

  return (
    <div className="Indivisual-Product">
      <Filter left={"64%"} />
      <CategorySlide />
      <Breadcrumb />

      <div className="product-indivisual-container">
        <div className="left-container">
          <div className="img-container">
            <img src="/Image/41.png" alt="" />
          </div>

          <div className="Multiple-Image">
            <img src="/Image/41.png" alt="" />
            <img src="/Image/41.png" alt="" />
            <img src="/Image/41.png" alt="" />
          </div>
        </div>
        <div className="right-container">
          <h5 className="title">Men T Shirt Full Sleeves</h5>

          <div className="price-container">
            <p className="mrp">₹ 2500</p>
            <p className="selling-price">₹ 1800</p>
            <p className="offer">(30% OFF)</p>
          </div>

          <div className="color-container">
            <div className="colors">
              <p>Color : </p>
              <p className="light">Sky Blue</p>
            </div>
            <div className="multi-color">
              <div className="main" style={{ background: "#000" }}></div>
              <div className="main" style={{ background: "#CBC273" }}></div>
              <div className="main" style={{ background: "#05C2CB" }}></div>
            </div>
          </div>

          <div className="color-container">
            <div className="colors">
              <p>Size : </p>
              <p className="light">S</p>
            </div>
            <div className="multi-size">
              <p className="active">S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
              <p>XXL</p>
            </div>
          </div>

          <div className="Return-Policy">
            <p>Return Policy : </p>
            <p className="light"> In from delivery dateXX Days</p>
          </div>

          <div className="multi-buttons">
            <button className="addToCart"> add to cart</button>
            <button className="buyNow">buy now</button>
            <i className="fa-sharp fa-regular fa-heart"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>

          <div className="Return-Policy">
            <p>Product Specs : </p>
            <p className="light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>

      <p className="Heading-all">Related Suggestions</p>
      <TrendingProduct data={TrendingProducts} />
    </div>
  );
};

export default SingleProduct;