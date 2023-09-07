/** @format */

import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import HamSidebar from "../../Navbar/HamSidebar";

const Filter = ({ left }) => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <HamSidebar show={modalShow} onHide={handleClose} />
      <div className="Filter-C">
        <div className="Filter-Category">
          <div className="center">
            <Link to="/homepage">
              <button
                className={location.pathname === "/homepage" ? "active" : ""}
              >
                <BsGrid />
                <span>All</span>
              </button>
            </Link>

            <Link to="/product/women">
              <button
                className={
                  location.pathname === "/product/women" ? "active" : ""
                }
              >
                <i className="fa-solid fa-person-dress"></i>
                <span>Women</span>
              </button>
            </Link>
            <Link to="/product/men">
              <button
                className={location.pathname === "/product/men" ? "active" : ""}
              >
                <i className="fa-solid fa-person"></i>
                <span>Men</span>
              </button>
            </Link>

            <Link to="/product/kid">
              <button
                className={location.pathname === "/product/kid" ? "active" : ""}
              >
                <i className="fa-solid fa-child"></i>
                <span>Kids</span>
              </button>
            </Link>
          </div>
          <div className="right Hide_On_Mobile">
            <button onClick={handleShow}>
              <span>Filter & Sort</span>
              <i className="fa-solid fa-sliders" />
            </button>
          </div>
        </div>
        <div className="empty-container">
          <div className="empty"></div>
          <div className="empty-colored" style={{ left: `${left}` }}></div>
        </div>
      </div>
    </>
  );
};

export default Filter;
