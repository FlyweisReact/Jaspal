/** @format */

import React ,{ useState , useEffect}  from "react";

const Notification = () => {
  const [ response , setResponse] = useState([])
  const [ loading , setLoading ] = useState(false)

  useEffect(() => {
    get_Notification
  })


  return (
    <div className="user-dashboard">
      <div className="Heading-component">
        <p>Hi! AXY</p>
        <p></p>
        <i className="fa-solid fa-x" />
      </div>

    </div>
  );
};

export default Notification;
