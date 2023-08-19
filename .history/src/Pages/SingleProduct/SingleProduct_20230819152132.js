/** @format */

import React from "react";
import Breadcrumb from "../../Component/BreadCrumb/Breadcrumb";
import CategorySlide from "../../Component/CategoryProduct/CategorySlide";
import Filter from "../../Component/Homecomp/Filter";

const SingleProduct = () => {
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
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
              <p>XXL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
