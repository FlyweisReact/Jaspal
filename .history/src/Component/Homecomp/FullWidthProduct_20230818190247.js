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
      {data.map((i, index) => (
        <div className="Main" key={index}>
          <div className="img-container">
            <i className="fa-sharp fa-regular fa-heart"></i>
            <img src={i.img} alt="" />
          </div>
          <div className="product-desc">
            <p className="light">{i.light}</p>
            <p className="title"> {i.} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullWidthProduct;
