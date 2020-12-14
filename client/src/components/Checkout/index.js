import React from "react";
import { connect } from "react-redux";
import "./checkout.styles.scss";
import CheckoutItem from "./CheckoutItem";

const Checkout = ({ total, items = [] }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {items.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: &#x20B9; {total}</span>
      </div>
    </div>
  );
};

const mpaStateToProps = ({ cart: { items } }) => ({
  total: items.reduce((acc, item) => acc + item.quantity * item.price, 0),
  items,
});

export default connect(mpaStateToProps, null)(Checkout);
