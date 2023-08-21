/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";

const ThankYou = () => {

  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="Thank-you">
        <img src="/Image/46.png" alt="" />
        <p>Thank you for placing order</p>
        <div className="two-button">
          <button>Continue Shopping</button>
          <button>Go to My Orders</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
