import React from 'react'

const TrendingProduct = ({data}) => {
  return (
    <div className='Trending-Product'>
    {data.map((item , index) => (
      <div className='Main'>
            <img src='/Image/13.png' alt='' />
            <p>Summery Sundresses</p>
        </div>
    ))}
      
        <div className='Main'>
            <img src='/Image/14.png' alt='' />
            <p>Breezy Heels</p>
        </div>
        <div className='Main'>
            <img src='/Image/15.png' alt='' />
            <p>Beach Date Bags</p>
        </div>
    </div>
  )
}

export default TrendingProduct