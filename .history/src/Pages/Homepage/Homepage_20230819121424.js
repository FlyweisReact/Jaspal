import React from 'react'
import Filter from '../../Component/Homecomp/Filter'
import FullWidthProduct from '../../Component/Homecomp/FullWidthProduct'
import OfferProduct from '../../Component/Homecomp/OfferProduct'
import TrendingProduct from '../../Component/Homecomp/TrendingProduct'
import Footer from '../../Navbar/Footer'
import Navbar from '../../Navbar/Navbar'

const Homepage = () => {
  return (
    <div className='Home-Page'>
        <Filter />
        <OfferProduct />
        <p className='Heading-all'>Trending This Week</p>
        <TrendingProduct />
        <p className='Heading-all'>New</p>
        <FullWidthProduct />
        <Footer />
    </div>
  )
}

export default Homepage