/** @format */
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import CategoryCanvas from "./CategoryCanvas";

const HamSidebar = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [name, setName] = useState("");

  return (
    <>
      <CategoryCanvas show={modalShow} onHide={handleClose} name={name} />

      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Body className="Ham-canvas">
          <div className="Heading">
            <p>BRAND LOGO</p>
            <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
          </div>

          <ul>
            <li>Popular Products</li>
            <li>Explore New</li>
            <li
              onClick={() => {
                setName("men");
                props.onHide();
                handleShow();
              }}
            >
              Men
            </li>
            <li
              onClick={() => {
                setName("women");
                props.onHide();
                handleShow();
              }}
            >
              Women
            </li>
            <li
              onClick={() => {
                setName("kid");
                props.onHide();
                handleShow();
              }}
            >
              Kids
            </li>
            <li>Gift & Living</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HamSidebar;
