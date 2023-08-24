import React from 'react'

const CategorySlide = ({response}) => {
  return (
   <div className='Category-Slide'>
        <ul>
        {response?.map((i ,index) => (
            <li key >  </li>
        ))}
            <li className='active'>New Arrival</li>
            <li>  Brand </li>
            <li>  Clothing </li>
            <li> Shoes  </li>
            <li> Bags  </li>
            <li>  Accessories </li>
            <li>  Jewellery </li>
            <li>  Pre-owned </li>
            <li>  Sale </li>
        </ul>
   </div>
    )
}

export default CategorySlide