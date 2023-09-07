/** @format */
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const HamSidebar = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  return (
<>


<Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body className="Ham-canvas">
        <div className="Heading">
          <p>BRAND LOGO</p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <ul>
          <li>Popular Products</li>
          <li>Explore New</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Gift & Living</li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
</>
  );
};

export default HamSidebar;
