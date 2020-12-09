import React from "react";
import { Grid } from "@material-ui/core";
import AddToCart from "../AddToCart";

const Collections = ({ items }) =>
  items.map(({ name, id, price, imageUrl }) => (
    <Grid item sm={6} md={3} key={id}>
      <div
        style={{
          height: 300,
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
        <h3 style={{ fontWeight: "lighter" }}>{price}</h3>
      </div>
    </Grid>
  ));

export default Collections;
