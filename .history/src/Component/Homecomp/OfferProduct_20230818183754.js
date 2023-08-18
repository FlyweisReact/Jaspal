/** @format */

import React from "react";
import FavouritesSlide from "./FavouritesSlide";

const OfferProduct = () => {

  const 

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
            <img src="/Image/6.png" alt="" />
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
            <img src="/Image/10.png" alt="" />
            <p className="pick">Our Picks</p>

            <div className="desc">
              <span>Women’s Flats Summer Straps</span>
              <button>₹2999</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
