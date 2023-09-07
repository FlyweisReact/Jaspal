/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProfileBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const nav = [
    {
      title: "My Profile",
      icon: <i className="fa-solid fa-user" />,
      link: "/identity",
    },
    {
      title: "Credit Balance",
      icon: <i className="fa-solid fa-money-bill" />,
      link: "/identity",
    },
  ];

  const LogoutHandler = () => {
    dispatch(LOGOUT());
    Store.addNotification({
      title: "",
      message: "Logged Out",
      type: "info",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate("/");
  };

  return (
    <div className="account-links">
      <div className="links">
        {nav?.map((i, index) => (
          <Link
            className={i.link === location.pathname ? "active" : ""}
            to={i.link}
            key={index}
          >
            <span className="link-item">
              {i.icon}
              <span> {i.title} </span>
            </span>
          </Link>
        ))}

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
