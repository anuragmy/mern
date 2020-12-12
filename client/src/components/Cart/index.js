import React from "react";
import { useDispatch, connect } from "react-redux";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { toggleCart } from "../actions";

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {!cartItems.length ? 0 : cartItems.length}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, null)(Cart);
