/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  forget_Password,
  reset_password,
} from "../../Repository/Authentication";
import Spinner from "react-bootstrap/Spinner";

const RecoverPassword = () => {
  const email = localStorage.getItem("Forget_Email");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const payload = { email, otp, newPassword, confirmPassword };

  const navigate = useNavigate();

  const postHandler = (e) => {
    e.preventDefault();
    reset_password(setLoading, payload, navigate);
  };

  return (
    <div className="Login-Page">
      <div className="Login-Div">
        <h5 className="logo">BRAND LOG0</h5>
        <div className="container">
          <p className="head" style={{ fontSize: "18px" }}>
            RESET YOUR PASSWORD
          </p>
          <form onSubmit={postHandler}>
            <input
              type="tel"
              minLength={4}
              maxLength={8}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="OTP"
            />

            <input
              type="password"
              minLength={}
              maxLength={8}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="OTP"
            />

            <input
              type="tel"
              minLength={4}
              maxLength={8}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="OTP"
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

export default RecoverPassword;
