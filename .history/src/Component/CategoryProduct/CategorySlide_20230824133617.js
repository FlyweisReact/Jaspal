import React from 'react'

const CategorySlide = ({response}) => {
  return (
   <div className='Category-Slide'>
        <ul>
        {response?.map((i ,index) => (
            <li key={index} > {i.name}   </li>
        ))}
            {/* <li className='active'>New Arrival</li> */}
        </ul>
   </div>
    )
}

export default CategorySlide