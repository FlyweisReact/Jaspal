/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";



// CSS
import './CSS/Normal.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
