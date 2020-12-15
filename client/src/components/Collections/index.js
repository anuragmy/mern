import React from "react";
import { Grid } from "@material-ui/core";
//import AddToCart from "../AddToCart";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addItem } from "../actions";
import { CustomButton } from "../CustomButton";
// import { addItemToCart } from "../Cart/utils";
import { selectCartItems } from "../Cart/cart-selctor";

const Collections = ({ items, cartItems }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Grid item container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <div className="main">
              <div
                className="background"
                style={{
                  height: 400,
                  background: `url(${item.imageUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <CustomButton
                  onClick={() => {
                    dispatch(addItem(item));
                  }}
                >
                  ADD TO CART
                </CustomButton>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ fontWeight: "lighter" }}>
                {item.name.toUpperCase()}{" "}
              </h3>
              <h3 style={{ fontWeight: "lighter" }}>&#x20B9; {item.price}</h3>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, null)(Collections);
