/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { add_money, get_wallet } from "../../Repository/category";
import { LOGOUT } from "../../store/slices/authSlice";
import { Store } from "react-notifications-component";

const Identity = () => {
  const [amount, setAmount] = useState(0);
  const [ balance , setBalance ] = useState(0)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getWallet = () => {
    get_wallet(setAmount);
  };

  useEffect(() => {
    getWallet();
  }, []);

  const payload = { balance}

  const submitHandler =async (e) => {
    e.preventDefault()
    await add_money(payload)
    getWallet()
  }

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
    <div>
      <Navbar />

      <div className="container-width">
        <div class="page_title_account">Your account</div>

        <div className="identity-dashboard">
          <div className="left-container">
            <div className="account-links">
              <div className="links">
                <Link className="active" to="/identity">
                  <span className="link-item">
                    <i className="fa-solid fa-user"></i>
                    <span> Information </span>
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
          </div>
          <div className="right-container">
            <div className="block_content-right">
              <div className="title_account_second">
                Your personal information
              </div>

              <div className="credit">
                <p className="title">Credit balance</p>
                <p className="total">
                  Total(USD): <br /> <span>${amount} </span>{" "}
                </p>
              </div>

              <div className="addMoney_button">
                <button>Add Money</button>
              </div>

                <form onSubmit={}>
                    <div>
                        <input type='number' placeholder="Enter Amount" />
                        <button>Add</button>
                    </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
