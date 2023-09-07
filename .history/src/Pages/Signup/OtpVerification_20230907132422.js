/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration, verify_otp } from "../../Repository/Authentication";
import Spinner from "react-bootstrap/Spinner";

const OtpVerification = () => {

const id = '64f9828ed645d78295ba38f2'
  const [ otp , setOtp ] = useState("")
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const payload = { otp };

  const postHandler = (e) => {
    e.preventDefault();
    verify_otp(payload, navigate, setLoading);
  };

  return (
    <div className="Login-Page">
      <div className="Login-Div">
        <h5 className="logo">BRAND LOG0</h5>
        <div className="container">
          <p className="head">Registration</p>
          <form onSubmit={postHandler}>
           
            <Link
              to="/vendor/registration"
              style={{ color: "black" }}
              className="forget-password"
            >
              Register as Vendor
            </Link>
            <button className="login-button" type="submit">
              {loading === true ? (
                <Spinner animation="border" role="status" />
              ) : (
                "Register"
              )}
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

export default OtpVerification;
