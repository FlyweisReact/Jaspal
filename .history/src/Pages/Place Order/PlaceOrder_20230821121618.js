import React from 'react'
import Navbar from '../../Navbar/Navbar'

const PlaceOrder = () => {
  return (
    <div className='place-order'>
    <Navbar />

    <div className="progess-bar">
        <div className="full-circle active"></div>
        <div className="line activeLine"></div>
        <div className="full-circle active"></div>
        <div className="line active"></div>
        <div className="full-circle"></div>
      </div>

    </div>
  )
}

export default PlaceOrder