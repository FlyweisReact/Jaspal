import React from 'react'
import Filter from '../../Component/Homecomp/Filter'
import Navbar from '../../Navbar/Navbar'

const Homepage = () => {
  return (
    <div className='Home-Page'>
        <Navbar />
        <Filter />
    </div>
  )
}

export default Homepage