/** @format */

import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { getCategorybyGender } from "../Repository/category";

const CategoryCanvas = (props) => {
  const name = props.name;
  const [lodaing, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  const fetchHandler = () => {
    getCategorybyGender(name, setLoading, setResponse);
  };

  useEffect(() => {
    if (props.show) {
      fetchHandler();
    }
  }, [props]);

  console.log("data", response);

  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body className="Ham-canvas">
        <div className="Heading">
          <p>New Arrival</p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <ul>
          {response?.map((i, index) => (
            <li key={index}> {i.name} </li>
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CategoryCanvas;
