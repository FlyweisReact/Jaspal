import React from 'react'

const CategorySlide = ({response , category}) => {
  return (
   <div className='Category-Slide'>
        <ul>
        {response?.map((i ,index) => (
            <li key={index} onClick > {i.name}   </li>
        ))}
            {/* <li className='active'>New Arrival</li> */}
        </ul>
   </div>
    )
}

export default CategorySlide