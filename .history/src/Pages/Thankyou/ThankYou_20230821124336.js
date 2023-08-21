/** @format */

import React, { useEffect } from "react";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";

const ThankYou = () => {
    useEffect(() => {
        window.sc
    })
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
