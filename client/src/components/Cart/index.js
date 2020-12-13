import React from "react";
import { useDispatch, connect } from "react-redux";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { toggleCart } from "../actions";
// import { selectCartItemsCount } from "./cart-selctor";

const Cart = ({ itemCount }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{!itemCount ? 0 : itemCount}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { items } }) => ({
  itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
});

export default connect(mapStateToProps, null)(Cart);
