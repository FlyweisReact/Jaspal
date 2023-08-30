import React , { useState} from 'react'
import FullWidthProduct from '../../Component/Homecomp/FullWidthProduct'
import Footer from '../../Navbar/Footer'
import Navbar from '../../Navbar/Navbar'

const Search = () => {
    const [ response , setResponse ] = useState([])
    const [ loading , setLoading ] = useState(false)
    const [ limit , setLimit ] = useState(4)


    


  return (
    <div
    className="Category-Product"
    style={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <Navbar />
    <div>
      <FullWidthProduct products={response} loading={loading} title={'Title'} />
      {response?.length > 0 ? (
        <button className="Load-More" onClick={() => setLimit(limit + 4)}>
          load more
        </button>
      ) : (
        ""
      )}
    </div>

    <Footer />
  </div>
  )
}

export default Search