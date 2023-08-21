import React from 'react'
import Navbar from '../../Navbar/Navbar'

const MyOrders = () => {
  return (
    <>
        <Navbar />
        <div className='my-orders'>
            <p>Order List</p>
            <input type='search' placeholder='Search Orders' />
        </div>
    </>
  )
}

export default MyOrders