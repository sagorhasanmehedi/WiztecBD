import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";
import UseAuth from "../../Hook/UseAuth";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:7000/product/${id}`)
      .then((respons) => setProduct(respons.data))
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <img className="detail_image" src={product.img} alt="" srcSet="" />
    </div>
  );
};

export default Details;
