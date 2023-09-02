/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../../Repository/Authentication";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fullName, setFullName] = useState(null);
  const userType = "USER";

  const navigate = useNavigate();

  const payload = { email, password, userType, phone, fullName };

  const postHandler = (e) => {
    e.preventDefault();
    userRegistration(payload, navigate);
  };

  return (
    <div className="Login-Page">
      <div className="Login-Div">
        <h5 className="logo">BRAND LOG0</h5>
        <div className="container">
          <p className="head">Registration</p>
          <form onSubmit={postHandler}>
            <input
              type="text"
              name="Name"
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Full Name"
            />
            <input
              type="tel"
              minLength={8}
              maxLength={12}
              name="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" Email Address"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="/" style={{ color: "black" }} className="forget-password">
              Register as Vendor
            </a>
            <button className="login-button" type="submit">
              Register
            </button>

            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="signup-button" type="button">
                Login
              </button>
            </Link>

            <div className="three-img">
              <img src="/Image/2.png" alt="" />
              <img src="/Image/2.png" alt="" />
              <img src="/Image/2.png" alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
