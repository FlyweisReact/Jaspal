/** @format */

import React from "react";

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
            placeholder="Mobile Number"
          />
          <input
            type="password"
            minLength={8}
            maxLength={12}
            placeholder="Mobile Number"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
