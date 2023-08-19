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

            <div className="Multiple-Image"></div>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
