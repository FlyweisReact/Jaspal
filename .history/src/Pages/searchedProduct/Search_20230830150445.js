/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FullWidthProduct from "../../Component/Homecomp/FullWidthProduct";
import Footer from "../../Navbar/Footer";
import Navbar from "../../Navbar/Navbar";
import { filter_product } from "../../Repository/category";

const Search = () => {
  const { query } = useParams();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    filter_product(setLoading, query, setResponse, limit);
  }, [query, limit]);

  const title = `All ${query} Related Product`;

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
        <FullWidthProduct products={response} loading={loading} title={title} />
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

export default Search;
