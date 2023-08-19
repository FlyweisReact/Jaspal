import React from 'react'
import CategorySlide from '../../Component/CategoryProduct/CategorySlide'
import Filter from '../../Component/Homecomp/Filter'

const SingleProduct = () => {
  return (
    <div className='Indivisual-Product'>
    <Filter left={'64%'}  />
    <CategorySlide />
    </div>
  )
}

export default SingleProduct