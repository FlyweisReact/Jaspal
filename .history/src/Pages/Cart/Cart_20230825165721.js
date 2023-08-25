/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../Repository/category";

const Cart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart(setLoading, setCart);
  }, []);

  useEffect(() => {
    if (cart) {
      setProducts(cart.products);
    }
  }, [cart]);

  console.log(cart, "Cart");

  return (
    <div className="cart-page">
      <div>
        <Navbar />

      {
        loading === true ? "" : <></>
       }

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
