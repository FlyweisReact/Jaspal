/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login-Page">
      <div className="Login-Div">
        <h5 className="logo">BRAND LOG0</h5>
        <div className="container">
          <p className="head">Login</p>
          <input
            type="tel"
            minLength={8}
            maxLength={12}
            name="Phone"
            placeholder="Mobile Number"
          />
          <input type="password" name="password" placeholder="Password" />
          <a href="/" className="forget-password">
            {" "}
            Forgot Password
          </a>
          <Link to="/homepage" style={{ textDecoration: "none" }}>
            <button className="login-button">Login</button>
          </Link>
          <button className="signup-button">Sign Up</button>

          <div className="three-img">
            <img src="/Image/2.png" alt="" />
            <img src="/Image/2.png" alt="" />
            <img src="/Image/2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
