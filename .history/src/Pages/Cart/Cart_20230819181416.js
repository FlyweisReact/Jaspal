/** @format */

import React from "react";
import Filter from "../../Component/Homecomp/Filter";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart-page">
      <Navbar />
      <Filter left={"64%"} />

      <div className="progess-bar">
        <div className="full-circle active"></div>
        <div className="line"></div>
        <div className="full-circle"></div>
        <div className="line"></div>
        <div className="full-circle"></div>
      </div>

      <div className="Cart-container">
        <div className="left-container">
           <div className="main">
           <div className="img-container">
                <img src='/Image/41.png' alt='' />
            </div>
            <div className="desc-box">
                <p className="title">Men  T Shirt  Full Sleeves</p>
                <p className="size">L</p>
                <span className="color-cont">
                    <div style={{background :"#05C2CB"}}></div>
                </span>

                <div className="multi-buttons">

                <div className="Quantity">
                <i
                        className="fa-solid fa-minus"
                        onClick={() =>
                          quantity === 1 ? "" : setQuantity(quantity - 1)
                        }
                      ></i>
                      <span>{quantity} </span>
                      <i
                        className="fa-solid fa-plus"
                        onClick={() => setQuantity(quantity + 1)}
                      ></i>
                    </div>
                    <p>₹ 1800</p>
                </div>

                </div>
            </div>
           </div>
        </div>
        <div className="right-container"></div>
      </div>

    </div>
  );
};

export default Cart;
