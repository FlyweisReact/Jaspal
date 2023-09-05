/** @format */

import { Offcanvas } from "react-bootstrap";

const HamSidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body className="Ham-canvas">
        <div className="Heading">
          <p>BRAND LOGO</p>
          <i className="fa-solid fa-x"></i>
        </div>

        <ul>
            <li>Popular Products</li>
            <li>Popular Products</li>
            <li>Popular Products</li>
            <li>Popular Products</li>
            <li>Popular Products</li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HamSidebar;
