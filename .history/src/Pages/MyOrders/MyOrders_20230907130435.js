/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { cancel_order, myOrder } from "../../Repository/category";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");

  const fetchHandler = () => {
    myOrder(setResponse, setLoading);
  };

  useEffect(() => {
    fetchHandler;
  }, []);

  const filterData = !query
    ? response
    : response?.filter((item) =>
        item.productId?.productName
          ?.toLowerCase()
          .includes(query?.toLowerCase())
      );

  function MyVerticallyCenteredModal(props) {
    const [submitLoading, setSubmitLoading] = useState(false);
    const [reason, setReason] = useState("");

    payload = { reason };

    const submit_Handler = async (e) => {
      e.preventDefault();
      await cancel_order(id, payload, setSubmitLoading);
      props.onHide()
      fetchHandler();
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="Cancel_Order">
          <div className="Head">
            <p>Do You Want To Cancel This Order ? </p>
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>

          <form onSubmit={submit_Handler}>
            <textarea
              rows="4"
              cols="50"
              placeholder="Please Mention You's Reason's"
              onChange={(e) => setReason(e.target.value)}
            />
            <button type="submit"> 
            {
              submitLoading ? 
            }
            CANCEL ORDER</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Navbar />

      {loading === true ? (
        <div className="Indivisual-Product">
          <div className="product-indivisual-container">
            <div className="left-container">
              <div className="img-container" style={{ height: "500px" }}>
                <Skeleton.Image active />
              </div>
            </div>
            <div className="right-container">
              <h5 className="title">
                {" "}
                <Skeleton active />{" "}
              </h5>
              <h5 className="title">
                {" "}
                <Skeleton active />{" "}
              </h5>
              <h5 className="title">
                {" "}
                <Skeleton active />{" "}
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-orders">
          <div className="Heading-Cont">
            <p>Order's List</p>
            <div className="search-box">
              <input
                type="search"
                placeholder="Search Orders"
                onChange={(e) => setQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          {!filterData ? (
            <div className="empty-cart">
              <img src="./Image/47.png" alt="" />
              <p>No Order Placed Yet !</p>
            </div>
          ) : filterData?.length === 0 && query ? (
            <div className="empty-cart">
              <img src="./Image/47.png" alt="" />
              <p>No Product Placed Related to {query}</p>
            </div>
          ) : (
            filterData?.map((item, index) => (
              <div className="Order-List" key={index}>
                <div className="cont">
                  <div className="left-container">
                    <img src={item.productId?.productImage?.[0]} alt="" />
                    <div className="description-box">
                      <p className="title"> {item.productId?.productName} </p>
                      <div className="size-desc">
                        <p className="size"> {item.unitInwords} </p>
                        <span
                          className="color"
                          style={{
                            background: item.productVarientId?.color?.colorCode,
                          }}
                        ></span>
                      </div>
                      <div className="price-box">
                        <p>QTY - {item.quantity} </p>
                        <p> {item.total} </p>
                      </div>
                    </div>
                  </div>

                  <div className="right-container">
                    <div className="two-sec">
                      <p>Order No - {item.orderId} </p>
                      <p>Date - {item?.createdAt?.slice(0, 10)} </p>
                      <p>Order Status - {item?.orderStatus} </p>
                    </div>
                    <p className="arr"></p>
                    {/* <p className="arr">Arriving on 25/08/2023</p> */}
                    <div className="three-buttons">
                      {/* <button className="light">View Order Detail</button>
                      <button>Track your Order</button> */}
                      <button onClick={() => setModalShow(true)}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="two-buttons mb-3">
            <Link to="/homepage">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default MyOrders;
