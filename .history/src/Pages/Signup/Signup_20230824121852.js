import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { userLogin } from "../../Repository/Authentication";

const Signup = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const userType = "USER";
  
    const navigate = useNavigate();
  
    const payload = { email, password, userType };
  
    const dispatch = useDispatch();
  
    const postHandler = (e) => {
      e.preventDefault();
      dispatch(userLogin(payload ,navigate));
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
                Login
              </button>
  
              <button className="signup-button">Sign Up</button>
  
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

export default Signup