/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";
import ProductbyCategory from "./Pages/CategoryProduct/ProductbyCategory";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import ShippingAddres from "./Pages/Shipping/ShippingAddres";
import PlaceOrder from "./Pages/Place Order/PlaceOrder";
import ThankYou from "./Pages/Thankyou/ThankYou";
import MyOrders from "./Pages/MyOrders/MyOrders";
import { ReactNotifications } from 'react-notifications-component'
import Signup from "./Pages/Signup/Signup";

// CSS
import "./CSS/Normal.css";
import "./CSS/Navbar.css";
import "./CSS/Footer.css";
import './CSS/Laptop.css'
import './CSS/Mobile.css'
const App = () => {
  return (
    <>
       <ReactNotifications  />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductbyCategory />} />
          <Route path="/product/:id/:name" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-address" element={<ShippingAddres />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route  path="/my-order" element={<MyOrders />} />
          <Route path="/user-register" element={<Signup />} />
          <Route path="/subCategory/product/:id/:name" element={<SubProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
