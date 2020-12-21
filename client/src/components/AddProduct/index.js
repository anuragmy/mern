import React from "react";
import { Container, Grid } from "@material-ui/core";

const AddProduct = () => {
  const [state, setState] = React.useState({
    name: "",
    description: "",
    price: "",
    catagories: [],
    catagory: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
  });

  const {
    name,
    description,
    price,
    catagories,
    catagory,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
  } = state;

  return (
    <div>
      <Container>
        <Grid item container spacing={2}>
          prof
        </Grid>
      </Container>
    </div>
  );
};

export default AddProduct;
