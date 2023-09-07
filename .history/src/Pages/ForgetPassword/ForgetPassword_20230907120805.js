/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../Repository/Authentication";
import Spinner from "react-bootstrap/Spinner";

const ForgetPassword = () => {
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
          <p className="head" style={{ fontSize: "18px" }}>
            Please enter the email address you used to register. You will
            receive a temporary link to reset your password.
          </p>
          <form onSubmit={postHandler}>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
            />

            <button className="login-button" type="submit">
              {loading === true ? (
                <Spinner animation="border" role="status" />
              ) : (
                "SEND OTP"
              )}
            </button>

            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="signup-button" type="butoon">
                BACK TO LOGIN
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