import React from 'react'
import Filter from '../../Component/Homecomp/Filter'
import OfferProduct from '../../Component/Homecomp/OfferProduct'
import TrendingProduct from '../../Component/Homecomp/TrendingProduct'
import Navbar from '../../Navbar/Navbar'

const Homepage = () => {
  return (
    <div className='Home-Page'>
        <Navbar />
        <Filter />
        <OfferProduct />
        <p className='Heading-all'>Trending This Week</p>
        <TrendingProduct />
    </div>
  )
}

export default Homepage