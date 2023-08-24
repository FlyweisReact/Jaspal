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
      {loading ===  true ?  :<></>}
       
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
