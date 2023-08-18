import React from 'react'
import Filter from '../../Component/Homecomp/Filter'
import OfferProduct from '../../Component/Homecomp/OfferProduct'
import Navbar from '../../Navbar/Navbar'

const Homepage = () => {
  return (
    <div className='Home-Page'>
        <Navbar />
        <Filter />
        <OfferProduct />

        <p className='Heading'></p>
    </div>
  )
}

export default Homepage