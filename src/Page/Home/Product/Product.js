import { Grid } from "@mui/material";
import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  let navigate = useNavigate();

  // redirect to details page
  const redirect_home = (id) => {
    navigate(`details${id}`);
  };

  return (
    <div className="all_product">
      <Grid container>
        {data.map((DATA, index) => (
          <Grid
            style={{
              marginBottom: "25px",
            }}
            key={index}
            item
            md={3}
          >
            <div onClick={() => redirect_home(DATA._id)} className="product">
              <img className="product_image" src={DATA.img} alt="" srcSet="" />
              <div className="product_info">
                <p>{DATA.name}</p>
                <p className="product_price">৳ {DATA.price}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
