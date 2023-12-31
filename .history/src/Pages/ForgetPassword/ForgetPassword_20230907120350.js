/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../Repository/Authentication";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const userType = "USER";
  const payload = { email, password, userType };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(payload, navigate, setLoading));
  };

  return (
    <div className="Login-Page">
      <div className="Login-Div">
        <h5 className="logo">BRAND LOG0</h5>
        <div className="container">
          <p className="head">Login</p>
          <form onSubmit={postHandler}>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Registered Email Address"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="/" className="forget-password">
              {" "}
              Forgot Password
            </a>
            <button className="login-button" type="submit">
              {loading === true ? (
                <Spinner animation="border" role="status" />
              ) : (
                "Login"
              )}
            </button>

            <Link to="/user-register" style={{ textDecoration: "none" }}>
              <button className="signup-button" type="butoon">
                Sign Up
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

export default ForgetPassword;
