/** @format */

import React, {  useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";


const SubProducts = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [limit, setLimit] = useState(4);

  return (
    <div className="Category-Product">
      <Navbar />
      {/* <FullWidthProduct
        products={products}
        loading={productLoading}
        title={title}
      />
      {products?.length > 0 ? (
        <button className="Load-More" onClick={() => setLimit(limit + 4)}>
          load more
        </button>
      ) : (
        ""
      )} */}

      <Footer />
    </div>
  );
};

export default SubProducts;
