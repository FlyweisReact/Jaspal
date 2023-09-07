/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verify_otp } from "../../Repository/Authentication";
import Spinner from "react-bootstrap/Spinner";

const OtpVerification = () => {
  const id = localStorage.getItem("Verify_id");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const payload = { otp };

  const postHandler = (e) => {
    e.preventDefault();
    verify_otp(id, payload, setLoading, navigate);
  };

  return (
    <div className="Login-Page">
      <div className="Login-Div">
        <h5 className="logo">BRAND LOG0</h5>
        <div className="container">
          <p className="head">Registration</p>
          <form onSubmit={postHandler}>
            <input
              type="tel"
              minLength={4}
              maxLength={8}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
            />

            <button className="login-button" type="submit">
              {loading === true ? (
                <Spinner animation="border" role="status" />
              ) : (
                "Verify Otp "
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
