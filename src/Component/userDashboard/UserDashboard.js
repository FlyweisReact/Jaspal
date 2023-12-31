/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const UserDashboard = (props) => {
  return (
      <Offcanvas
        show={props.show}
        onHide={props.handleClose}
        placement="end"
        className="user-dashboard"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
  );
};

export default UserDashboard;
