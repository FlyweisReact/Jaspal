import React from 'react'
import Navbar from '../../Navbar/Navbar'

const MyOrders = () => {
  return (
    <>
        <Navbar />
        <div className='my-orders'>
            <p>Order List</p>
            <input type='search' />
        </div>
    </>
  )
}

export default MyOrders