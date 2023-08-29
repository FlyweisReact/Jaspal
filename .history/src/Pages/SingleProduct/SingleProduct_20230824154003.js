/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Component/BreadCrumb/Breadcrumb";
import CartCanvas from "../../Component/cart/CartCanvas";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { indivisualProduct } from "../../Repository/category";

const SingleProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, name } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    indivisualProduct(setLoading, setProduct, id, setImage);
  }, [id]);


  const products = [
    {
      img: "/Image/42.png",
      light: "Exclusive",
      title: "Slim Fit",
    },
    {
      img: "/Image/43.png",
      light: "Our Picks",
      title: "Party",
    },
    {
      img: "/Image/44.png",
      light: "Limited Stock",
      title: "Casual",
    },
    {
      img: "/Image/45.png",
      light: "Season Pick",
      title: "Jacket",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CartCanvas show={show} handleClose={handleClose} />
      <Navbar />
      <div className="Indivisual-Product">
      {loading ===  true ? <>
        <Breadcrumb category={product?.categoryId?.name} name={name} />

<div className="product-indivisual-container">
  <div className="left-container">
    <div className="img-container">
      <img src={image} alt="" />
    </div>

    <div className="Multiple-Image">
      {product?.productImage?.map((i, index) => (
        <img src={i} alt="" key={index} onClick={() => setImage(i)} />
      ))}
    </div>
  </div>
  <div className="right-container">
    <h5 className="title"> {product.productName} </h5>

    <div className="price-container">
      <p className="mrp"> {product?.originalPrice} </p>
      <p className="selling-price">{product.discountPrice} </p>
      <p className="offer">
        {" "}
        {product?.discountActive === true
          ? `(${product.discount}% OFF)`
          : ""}{" "}
      </p>
    </div>

    {/* <div className="color-container">
      <div className="colors">
        <p>Color : </p>
        <p className="light">Sky Blue</p>
      </div>
      <div className="multi-color">
        <div className="main" style={{ background: "#000" }}></div>
        <div className="main" style={{ background: "#CBC273" }}></div>
        <div className="main" style={{ background: "#05C2CB" }}></div>
      </div>
    </div> */}

    {/* <div className="color-container">
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
    </div> */}

    <div className="Return-Policy">
      <p>Return Policy : </p>
      <p className="light"> {product?.returnPolicy} </p>
    </div>

    <div className="multi-buttons">
      <button className="addToCart" onClick={() => handleShow()}>
        {" "}
        add to cart
      </button>
      <button className="buyNow">buy now</button>
      <i className="fa-sharp fa-regular fa-heart"></i>
      <i className="fa-solid fa-share-nodes"></i>
    </div>

    <div className="Return-Policy">
      <p>Product Specs : </p>
      <p className="light">{product?.description}</p>
    </div>
  </div>
</div>
<p className="Heading-all">Related Suggestions</p>
<FullWidthProduct products={products} />

<button className="Load-More">load more</button>

<hr className="myHr" />

<div className="Rating-Component">
  <div className="Head">
    <p className="title">Customer Rating and Reviews</p>
    <div>
      <p>4.5/5</p>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
  </div>

  <div className="component">
    <div className="two-sec">
      <p>XYZ ABC</p>
      <div>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>

    <div className="desc-box">
      <p className="title">Lovely product </p>
      <p className="desc">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s
      </p>
    </div>
  </div>

  <div className="component">
    <div className="two-sec">
      <p>XYZ ABC</p>
      <div>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>

    <div className="desc-box">
      <p className="title">Lovely product </p>
      <p className="desc">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s
      </p>
    </div>
  </div>

  <div className="component">
    <div className="two-sec">
      <p>XYZ ABC</p>
      <div>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>

    <div className="desc-box">
      <p className="title">Lovely product </p>
      <p className="desc">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s
      </p>
    </div>
  </div>
</div>
<button className="Load-More">load more</button>

      </> :<></>}
       
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;