/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Grid } from "@material-ui/core";
import SHOP_DATA from "./data";
import Collections from "../Collections";

const Shop = () => {
  const [data] = React.useState(SHOP_DATA);

  return (
    <Container>
      <h1>Collections</h1>
      <Grid item Container spacing={2}>
        {data.map(({ title, id, items }) => (
          <div key={id}>
            <h2>{title}</h2>
            <Collections items={items} />
          </div>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
