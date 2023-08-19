import React from 'react'
import Filter from '../../Component/Homecomp/Filter'
import Navbar from '../../Navbar/Navbar'

const ShippingAddres = () => {
  return (
    <div>
        <Navbar />
        <Filter left={'64%'}  />
        <div className="progess-bar">
          <div className="full-circle active"></div>
          <div className="line active"></div>
          <div className="full-circle"></div>
          <div className="line"></div>
          <div className="full-circle"></div>
        </div>
    </div>
  )
}

export default ShippingAddres