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
          <div className="img-container">
            <img src="/Image/41.png" alt="" />
          </div>
          <div></div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartCanvas;
