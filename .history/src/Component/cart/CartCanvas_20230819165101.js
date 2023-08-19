/** @format */

import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const CartCanvas = (props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.handleClose}
      placement="end"
      className="Cart-Canvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="cart">
          <div className="Main">
            <div className="img-container">
              <img src="/Image/41.png" alt="" />
            </div>
            <div className="desc-box">
              <p className="title">Men T Shirt Full Sleeves</p>
              <div className="color-box">
                <span className="colors">
                  <div style={{ background: "#05C2CB" }}></div>
                </span>
                <span className="size">L</span>
              </div>
            </div>

            <div className="two-sec">
            <div className="Quantity">
            <i className="fa-solid fa-minus"></i>
            <span>1</span>
            <i class="fa-solid fa-plus"></i>

            </div>

            </div>

          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartCanvas;
