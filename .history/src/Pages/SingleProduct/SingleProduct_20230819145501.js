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
                <img src='/Image/41.png' alt='' />
            </div>

            <div className="Multiple-Image">
            <img src='/Image/41.png' alt='' />
            <img src='/Image/41.png' alt='' />
            <img src='/Image/41.png' alt='' />
            </div>
        </div>
        <div className="right-container">
            <h5 className="title">Men  T Shirt  Full Sleeves</h5>

            <div className="price-container">
            

            </div>

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
