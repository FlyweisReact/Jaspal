import { Offcanvas } from "react-bootstrap";

 const HamSidebar = (props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.handleClose}
    >
      <Offcanvas.Body className="Ham-canvas">

        <div className="Heading">
        <p>BRAND LOGO</p>
        <i class="fa-solid fa-x"></i>

        </div>

      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HamSidebar