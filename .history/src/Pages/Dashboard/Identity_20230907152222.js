/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { add_money, get_wallet } from "../../Repository/category";
import ProfileBar from "./ProfileBar";

const Identity = () => {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [show, setShow] = useState(false);

  const getWallet = () => {
    get_wallet(setAmount);
  };

  useEffect(() => {
    getWallet();
  }, []);

  const payload = { balance };

  const submitHandler = async (e) => {
    e.preventDefault();
    await add_money(payload);
    getWallet();
  };

  return (
    <div>
      <Navbar />

      <div className="container-width">
        <div class="page_title_account">Your account</div>

        <div className="identity-dashboard">
          <div className="left-container">
            <ProfileBar />
          </div>
          <div className="right-container">
            <div className="block_content-right">
              <div className="title_account_second">Credit Balance</div>

              <div className="credit">
                <p className="total">
                  Total(USD): <br /> <span>${amount} </span>{" "}
                </p>
              </div>

              <div className="addMoney_button">
                <button onClick={() => setShow(!show)}>Add Money</button>
                <button>Send Money</button>
              </div>

              {show ? (
                <form onSubmit={submitHandler}>
                  <div>
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      onChange={(e) => setBalance(e.target.value)}
                    />
                    <button type="submit">Add</button>
                  </div>
                </form>
              ) : (
                ""
              )}

              <form onSubmit={submitHandler}>
                <div>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    onChange={(e) => setBalance(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    onChange={(e) => setBalance(e.target.value)}
                  />
                  <button type="submit">Add</button>
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
