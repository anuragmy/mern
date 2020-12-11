import React from "react";
import { Grid } from "@material-ui/core";
import AddToCart from "../AddToCart";

const Collections = ({ items }) => {
  return (
    <>
      <Grid item container spacing={2}>
        {items.map(({ name, id, price, imageUrl }) => (
          <Grid item xs={12} sm={6} md={3} key={id}>
            <div
              style={{
                height: 400,
                background: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <AddToCart />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ fontWeight: "lighter" }}>{name.toUpperCase()} </h3>
              <h3 style={{ fontWeight: "lighter" }}>&#x20B9; {price}</h3>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Collections;
