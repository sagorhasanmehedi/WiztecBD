import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const axios = require("axios");

const Products = () => {
  const [product, setProduct] = useState([]);

  // get products data from server
  useEffect(() => {
    axios
      .get("http://localhost:7000/product")
      .then((data) => setProduct(data.data));
  }, []);

  return (
    <div className="all_products">
      <Product data={product} />
    </div>
  );
};

export default Products;
