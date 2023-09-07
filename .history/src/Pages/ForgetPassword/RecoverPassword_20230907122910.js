/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forget_Password, userLogin } from "../../Repository/Authentication";
import Spinner from "react-bootstrap/Spinner";

const RecoverPassword = () => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const payload = { email };

  const navigate = useNavigate();

  const postHandler = async (e) => {
    e.preventDefault();
   await  forget_Password(setLoading, payload, navigate);
   localStorage.setItem("Forget_Email", email)
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

export default RecoverPassword;
