/** @format */

import React from "react";

const FullWidthProduct = () => {
  const data = [
    {
      img: "/Image/16.png",
      light: "Exclusive",
      title: "Jade Overalls",
    },
    {
      img: "/Image/16.png",
      light: "Exclusive",
      title: "Jade Overalls",
    },
    {
      img: "/Image/16.png",
      light: "Exclusive",
      title: "Jade Overalls",
    },
    {
      img: "/Image/16.png",
      light: "Exclusive",
      title: "Jade Overalls",
    },
  ];

  return (
    <div className="full-width-product">
     {data.map((i ,index) => (
        <div className="Main">
        <div className="img-container">
          <i className="fa-sharp fa-regular fa-heart"></i>
          <img src="/Image/16.png" alt="" />
        </div>
        <div className="product-desc">
          <p className="light">Exclusive</p>
          <p className="title">Jade Overalls</p>
        </div>
      </div>
     ))}
    </div>
  );
};

export default FullWidthProduct;
