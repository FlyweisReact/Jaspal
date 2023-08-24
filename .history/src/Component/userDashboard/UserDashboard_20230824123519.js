import React from 'react'

const UserDashboard = () =>  {
    return (
      <Offcanvas
        show={props.show}
        onHide={props.handleClose}
        placement="end"
        className="Cart-Canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart">
            <div className="Apart">
              <div>
                <div className="Main">
                  <div className="img-container">
                    <img src="/Image/41.png" alt="" />
                  </div>
                  <div className="desc-box">
                    <p className="title">Men T Shirt Full Sleeves</p>
                    <div className="color-box">
                      <span className="colors">
                        <div style={{ background: "#05C2CB" }}></div>
                      </span>
                      <span className="size">L</span>
                    </div>
  
                    <div className="two-sec">
                      <div className="Quantity">
                          <i
                            className="fa-solid fa-minus"
                            onClick={() =>
                              quantity === 1 ? "" : setQuantity(quantity - 1)
                            }
                          ></i>
                          <span>{quantity} </span>
                          <i
                            className="fa-solid fa-plus"
                            onClick={() => setQuantity(quantity + 1)}
                          ></i>
                        </div>
                        <p>₹ 1800</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="checkout">
                <div className="two-sec">
                  <p>SUBTOTAL</p>
                  <p>₹ 1800</p>
                </div>
                <Link to={"/cart"}>
                  <button>CHECK OUT</button>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  };

export default UserDashboard