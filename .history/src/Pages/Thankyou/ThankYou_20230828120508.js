/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import PlaceOrder from "../Place Order/PlaceOrder";

const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    PlaceOrder()
  })

  return (
    <>
      <Navbar />
      <div className="Thank-you">
        <img src="/Image/46.png" alt="" />
        <p>Thank you for placing order</p>
        <div className="two-button">
          <button onClick={() => navigate("/homepage")}>
            Continue Shopping
          </button>
          <button onClick={() => navigate("/my-order")}>Go to My Orders</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
