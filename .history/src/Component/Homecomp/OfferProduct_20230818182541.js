/** @format */

import React from "react";
import FavouritesSlide from "./FavouritesSlide";

const OfferProduct = () => {
  return (
    <div className="offer-products">
      <div className="left-container">
        <div className="img-container">
          <h5>GET UPTO 50% OFF</h5>
          <button>Explore</button>
        </div>
        <div className="img-container img-container-2">
          <h5>GET UPTO 50% OFF</h5>
          <button>Explore</button>
        </div>

        <div className="two-sec">
          <div className="left">
            <img src='/Image/6.png' alt='' />
          </div>
          <div className="right">
            <FavouritesSlide />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="product-container">
          
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
