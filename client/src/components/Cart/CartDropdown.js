import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../CustomButton";

const CartDropdown = ({ items = [] }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps, null)(CartDropdown);
