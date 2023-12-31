/** @format */

import React from "react";
import Copyright from "../Component/copyright/Copyright";

const Footer = () => {
  return (
<div>
<div className="Footer-Div">
      <div className="container">
        <ul className="four-cont">
          <ul>
            <li className="head">Customer Service</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Orders and Delivery</li>
            <li>Payments</li>
            <li>Terms and Conditions</li>
          </ul>
          <ul>
            <li className="head">Career</li>
            <li>Work with Us</li>
            <li>From our Workers</li>
          </ul>
          <ul>
            <li className="head">Our Stores</li>
            <li>Find the Nearest Store</li>
            <li>Visit Virtual Store</li>
            <li>Contact Stores</li>
          </ul>
          <ul>
            <li className="head">Customer Memberships</li>
            <li>Become a Member</li>
            <li>Refer your Friend</li>
            <li>Student Discounts</li>
          </ul>
        </ul>

        <div className="social-links">
          <img src="/Image/20.png" alt="" />
          <img src="/Image/21.png" alt="" />
          <img src="/Image/22.png" alt="" />
          <img src="/Image/23.png" alt="" />
        </div>
      </div>
    </div>

    <Copyright />
</div>
  );
};

export default Footer;
