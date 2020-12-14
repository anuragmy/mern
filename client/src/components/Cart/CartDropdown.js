import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "../CartItem";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../CustomButton";
import { toggleCart } from "../actions";

const CartDropdown = ({ items = [] }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length > 0 ? (
          items.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span id="empty" className="empty">
            Your Cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCart());
          history.push("/checkout");
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps, null)(CartDropdown);
