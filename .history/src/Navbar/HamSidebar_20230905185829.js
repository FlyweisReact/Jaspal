import { Offcanvas } from "react-bootstrap";

 const HamSidebar = ({show , handleClose}) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Brand Logo</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HamSidebar