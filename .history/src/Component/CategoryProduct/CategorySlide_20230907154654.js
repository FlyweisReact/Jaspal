import React from 'react'

const CategorySlide = ({response , category}) => {
  return (
   <div className='Category-Slide'>
        <ul>
        {response?.map((i ,index) => (
            <li key={index} onClick={() => category(i._id)} > {i.name}   </li>
        ))}
        </ul>
   </div>
    )
}

export default CategorySlide