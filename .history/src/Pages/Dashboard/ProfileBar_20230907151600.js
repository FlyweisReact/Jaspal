/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProfileBar = () => {
    const location = useLocation()

    const nav = [
        {
            title : "Credit Balance" , 
            icon :  <i className="fa-solid fa-money-bill" /> ,
            link : '/identity'
        }
    ]

  return (
    <div className="account-links">
      <div className="links">
        <Link className="active" to="/identity">
          <span className="link-item">
            <i className="fa-solid fa-money-bill"></i>
            <span> Credit Balance </span>
          </span>
        </Link>

        <a href="#" onClick={() => LogoutHandler()}>
          <span class="link-item">
            <i class="fa-solid fa-power-off"></i>
            <span>Sign out</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProfileBar;
