import { Offcanvas } from "react-bootstrap";

 const HamSidebar = (props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.handleClose}
    >
      <Offcanvas.Body className="" >
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HamSidebar