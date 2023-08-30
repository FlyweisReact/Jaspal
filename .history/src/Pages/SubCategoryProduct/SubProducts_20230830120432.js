/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { subCategory_Product } from "../../Repository/category";

const SubProducts = () => {
  const { id  , name } = useParams();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    subCategory_Product(id, limit, setResponse, setLoading);
  }, [id, limit]);

  const Title = `${name} Products`

  return (
    <div className="Category-Product">
      <Navbar />
      <div>
      <FullWidthProduct
        products={response}
        loading={loading}
        title={Title}
      />
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
  );
};

export default SubProducts;
