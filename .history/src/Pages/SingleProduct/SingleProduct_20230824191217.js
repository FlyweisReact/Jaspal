/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Component/BreadCrumb/Breadcrumb";
import CartCanvas from "../../Component/cart/CartCanvas";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import {
  getProductVarients,
  indivisualProduct,
} from "../../Repository/category";
import { Skeleton } from "antd";

const SingleProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, name } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [varients, setVarients] = useState([]);
  const [colorName, setColorName] = useState("");
  const [sizeArr, setSizeArr] = useState([]);
  const [size, setSize] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [ withountVImage , ]

  useEffect(() => {
    indivisualProduct(setLoading, setProduct, id);
    getProductVarients(
      setVarients,
      id,
      setProductImages,
      setImage,
      setColorName,
      setSizeArr,
      setSize
    );
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CartCanvas show={show} handleClose={handleClose} />
      <Navbar />
      <div className="Indivisual-Product">
        {loading === true ? (
          <>
            <div className="product-indivisual-container">
              <div className="left-container">
                <div className="img-container" style={{ height: "500px" }}>
                  <Skeleton.Image active />
                </div>

                <div className="Multiple-Image" style={{ height: "120px" }}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton.Image active key={i} />
                  ))}
                </div>
              </div>
              <div className="right-container">
                <h5 className="title">
                  {" "}
                  <Skeleton active />{" "}
                </h5>
                <h5 className="title">
                  {" "}
                  <Skeleton active />{" "}
                </h5>
                <h5 className="title">
                  {" "}
                  <Skeleton active />{" "}
                </h5>
              </div>
            </div>
          </>
        ) : (
          <>
            <Breadcrumb category={product?.categoryId?.name} name={name} />

            <div className="product-indivisual-container">
              <div className="left-container">
                <div className="img-container">
                  <img src={image} alt="" />
                </div>

                <div className="Multiple-Image">
                  {productImages?.map((i, index) => (
                    <img
                      src={i.image}
                      alt=""
                      key={index}
                      onClick={() => setImage(i.image)}
                    />
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

                <div className="color-container">
                  <div className="colors">
                    <p>Color : </p>
                    <p className="light"> {colorName} </p>
                  </div>
                  <div className="multi-color">
                    {varients?.map((i, index) => (
                      <div
                        className="main"
                        key={index}
                        onClick={() => {
                          setColorName(i.color?.color);
                          setSizeArr(i.colorsUnits);
                          setSize(i.colorsUnits?.[0]?.unitInwords);
                          setProductImages(i.productImages);
                          setImage(i.productImages?.[0]?.image);
                        }}
                        style={{ background: i.color?.colorCode }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="color-container">
                  <div className="colors">
                    {sizeArr?.length > 0 ? (
                      <>
                        <p>Size : </p>
                        <p className="light"> {size} </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="multi-size">
                    {sizeArr?.map((i, index) => (
                      <p
                        className={size === i.unitInwords ? "active" : ""}
                        onClick={() => setSize(i.unitInwords)}
                        key={index}
                      >
                        {" "}
                        {i.unitInwords}{" "}
                      </p>
                    ))}
                  </div>
                </div>

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
            {/* <p className="Heading-all">Related Suggestions</p> */}
            {/* <FullWidthProduct products={products} /> */}

            {/* <button className="Load-More">load more</button> */}

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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            {/* <button className="Load-More">load more</button> */}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
